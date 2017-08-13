angular.module('splatApp')
.directive('draggableAbility', function() {
  return {
    link: function(scope,elm,attrs) {
      var options = {
        helper: 'clone',
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
              scope.bind = scope.$parent.skills[ui.draggable.attr('skill-id')];
            }
            if(ui.draggable.is('[ability-slot]')) {
              scope.$parent.loadout.swapSlots(ui.draggable.attr('ability-slot'), attrs.abilitySlot);
            }
          })
        },
        accept: function(draggable) {
          if(draggable.is('[ability-menu]')) {
            if(draggable.attr('skill-exclusive')) {
            if(draggable.attr('skill-exclusive') == attrs.abilitySlot) {
              return true;
            }
          }
            else return true;
        }
        if(draggable.is('[ability-slot]')) {
          var draggedAbility = scope.$eval(draggable.attr('slot-contents'))
          var myAbility = scope.$eval(attrs.slotContents)
          if(draggedAbility) if(draggedAbility.exclusive) return false;
          if(myAbility) if(myAbility.exclusive) return false;
          return true;
        }
        },
        activate: function(event,ui) {
          $(this).addClass('lightup')
        },
        deactivate: function(event,ui) {
          $(this).removeClass('lightup')
        },
        over: function(event,ui) {
          if($(this).hasClass('small')) {
            ui.helper.addClass('small')
          }
          if($(this).hasClass('large')) {
            ui.helper.addClass('large')
          }
          ui.helper.addClass('lightup')
        },
        out: function(event,ui) {
          if($(this).hasClass('small')) {
            ui.helper.removeClass('small')
          }
          if($(this).hasClass('large')) {
            ui.helper.removeClass('large')
          }
          ui.helper.removeClass('lightup')
        }
      }
      elm.droppable(options)
      elm.click(function() {
        scope.$apply(function() {
          scope.bind = null;
        })
      })
    }
  }
})
