(function() {
  'use strict'

  angular.module('workorder')
    .directive('woModalCatalog', Directive)

  /** @ngInject */
  function Directive(CatalogModalService) {
    return {
      restrict: 'EA',
      scope: {
        os: '=',
        catalog: '=',
        onSuccess: '&',
        onError: '&',
        freshData:'='
      },

      link: function(scope, btn) {
        btn.off('click.wo-modal-catalog')
          .on('click.wo-modal-catalog', function(e) {
            e.preventDefault()

            CatalogModalService.openModal(scope.os, scope.catalog,scope.freshData)
              .then(console.log)
              // .then(obj => scope.onSuccess({$catalog: obj}))
              .catch(console.error)
        })
      }
    }
  }
})()
