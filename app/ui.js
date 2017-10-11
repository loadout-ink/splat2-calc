document.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    $('body').addClass('show-focus-outlines');
  }
});

document.addEventListener('click', function(e) {
  $('body').removeClass('show-focus-outlines');
});

angular.module('splatApp').clipboard = function($scope, $timeout) {
    $scope.clipboard = new Clipboard('#copybtn');
    $scope.showCopy = false;
    $scope.clipboard.on('success', function(e) {
      $scope.$apply(function() {
        $scope.showCopy = true;
      })
      $timeout(function() {
        $scope.showCopy = false;
      }, 500)
    })

    $scope.clipboard.on('error', function(e) {
      $scope.copyLink();
    })

    $scope.copyLink = function() {
      window.prompt("Sharable URL", window.location.protocol +"//"+ window.location.hostname + window.location.pathname + "#" + $scope.encodeLoadout())
    }
}

angular.module('splatApp')
.directive('draggableAbility', function() {
  return {
    link: function(scope,elm,attrs) {
      var options = {
        helper: 'clone',
        appendTo: '#draggable-parent',
        zIndex:100,
        snap: '[ability-slot]',
        snapMode: 'inner',
        snapTolerance: 8
      }
      elm.draggable(options)
    }
  }
})
.directive('abilitySlot', function() {
  return {
    scope: {
      bind : '=abilitySlot'
    },
    link: function(scope,elm,attrs) {
      var options = {
        drop: function(event,ui) {
          scope.$apply(function() {
            if(ui.draggable.is('[ability-menu]')) {
              scope.bind = scope.$eval(ui.draggable.attr('skill'));
            }
            if(ui.draggable.is('[ability-slot]')) {
              scope.$parent.loadout.swapSlots(ui.draggable.attr('ability-slot'), attrs.abilitySlot);
            }
          })
        },
        accept: function(draggable) {
          if(attrs.containsFixed=="true") return false;
          if(draggable.is('[ability-menu]')) {
            var draggableSkill = scope.$eval(draggable.attr('skill'))
            if(draggableSkill.exclusive) {
            if(draggableSkill.exclusive == attrs.abilitySlot) {
              return true;
            }
          }
            else return true;
        }
        if(draggable.is('[ability-slot]')) {
          if(draggable.attr('contains-exclusive')=="true" || attrs.containsExclusive=="true") return false;
          else return true;
        }
        },
        activate: function(event,ui) {
          $(this).addClass('lightup')
        },
        deactivate: function(event,ui) {
          $(this).removeClass('lightup')
        },
        over: function(event,ui) {
          if($(this).hasClass('sub')) {
            ui.helper.removeClass('main')
            ui.helper.addClass('sub')
          }
          if($(this).hasClass('main')) {
            ui.helper.removeClass('sub')
            ui.helper.addClass('main')
          }
          ui.helper.addClass('lightup')
        },
        out: function(event,ui) {
          if($(this).hasClass('sub')) {
            ui.helper.removeClass('sub')
          }
          if($(this).hasClass('main')) {
            ui.helper.removeClass('main')
          }
          ui.helper.removeClass('lightup')
        }
      }
      elm.droppable(options)
      elm.click(function() {
        scope.$apply(function() {
          if(scope.bind.name != "Ability Doubler") {
            scope.bind = null;
          }
        })
      })
    }
  }
})
.directive('abilityBox', function() {
  return {
    link: function(scope,elm,attrs) {
      var options = {
        accept: function(draggable) {
          if(draggable.attr('skill')) {
            if(draggable.is('[ability-slot]') && draggable.attr('skill').name != 'Ability Doubler') return true;
          }
        },
        drop: function(event,ui) {
          scope.$apply(function() {
            scope.loadout.clearSlot(ui.draggable.attr('ability-slot'))
          })
        }
      }
      elm.droppable(options)
    }
  }
})
.directive('fallbackImg', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr("src", "assets/img/skills/Unknown.png");
            });
        }
    }
    return fallbackSrc;
});
