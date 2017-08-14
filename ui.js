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
              scope.bind = scope.$eval(ui.draggable.attr('skill'));
            }
            if(ui.draggable.is('[ability-slot]')) {
              scope.$parent.loadout.swapSlots(ui.draggable.attr('ability-slot'), attrs.abilitySlot);
            }
          })
        },
        accept: function(draggable) {
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
          if($(this).hasClass('small')) {
            ui.helper.removeClass('large')
            ui.helper.addClass('small')
          }
          if($(this).hasClass('large')) {
            ui.helper.removeClass('small')
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
.directive('abilityBox', function() {
  return {
    link: function(scope,elm,attrs) {
      var options = {
        accept: function(draggable) {
          if(draggable.is('[ability-slot]')) return true;
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
