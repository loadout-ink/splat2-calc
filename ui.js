angular.module('splatApp')
.directive('testDraggable', function() {
  return {
    link: function(scope,elm,attrs) {
      var options = {
        helper: 'clone',
        zIndex:100,
        snap: "[ability-slot]",
        snapMode: "inner",
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
            scope.bind = scope.$parent.skills[ui.draggable.prop("id")];
          })
        },
        accept: function(draggable) {
          if(scope.$parent.skills[draggable.prop("id")].hasOwnProperty('exclusive')) {
            if(scope.$parent.skills[draggable.prop("id")].exclusive == attrs.abilitySlot) {
              return true;
            }
          }
          else return true;
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
