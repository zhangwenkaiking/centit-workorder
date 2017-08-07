(function() {
  'use strict'

  angular.module('workorder')
    .controller('QuestionViewController', QuestionViewController)

  /** @ngInject */
  function QuestionViewController($stateParams,QuestionAPI,RoundAPI) {
    let vm = this;
    vm.hoveringOver = hoveringOver;
    // vm.askOthers = askOthers;
    // vm.score = score;
    vm.continueAsk = continueAsk;
    vm.submitScore = submitScore;

    activate()

    function activate() {
      vm.question = getQuestion();
      vm.rounds = getRound(Object.assign({},$stateParams));
    }

    //////////////////////////

    function getQuestion() {
      return QuestionAPI.get($stateParams)
    }
    function getRound(params) {
      delete params.roundId;
      return RoundAPI.query(params)
    }
    function continueAsk(){

      RoundAPI
        .supplemental({questionId:$stateParams.questionId},{questionRound:vm.questionRound})
        .$promise
        .then(function(){
          vm.questionRound.roundContent='';
          vm.rounds = getRound(Object.assign({},$stateParams));
        })
    }
    function submitScore(){
      QuestionAPI.comment(Object.assign({evaluateScore:vm.rate},$stateParams),{})
        .$promise
        .then(function(){
          activate();
        });
    }

    // function askOthers() {
    //   $state.go('root.question.edit',{catalogId:$stateParams.catalogId})
    // }

    // function score() {
    //   $uibModal.open({
    //     templateUrl: 'app/views/question/question-score.html',
    //     controller: 'QuestionScoreController',
    //     controllerAs: 'vm',
    //   }).result
    //     .then(function() {
    //       toastr.success(`评论成功`)
    //     })
    //
    // }

    //评分
    vm.rate =0;

    function hoveringOver (value) {
      vm.overStar = value;
      if(vm.overStar<3)
        vm.showMsg='很差';
      else if(vm.overStar<5)
        vm.showMsg = '一般';
      else
        vm.showMsg='很好';
    };

  }
})();

