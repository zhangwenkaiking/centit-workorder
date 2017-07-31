package com.centit.workorder.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONArray;
import com.centit.framework.core.dao.PageDesc;
import com.centit.framework.core.service.BaseEntityManager;
import com.centit.framework.model.basedata.IUserInfo;
import com.centit.workorder.po.AssistOperator;
import com.centit.workorder.po.AssistOperatorId;
import com.centit.workorder.po.QuestionInfo;
import com.centit.workorder.po.QuestionRound;

/**
 * QuestionInfo  Service.
 * create by scaffold 2017-05-08 
 * @author codefan@sina.com
 * 系统问题列表null   
*/

public interface QuestionInfoManager extends BaseEntityManager<QuestionInfo,java.lang.String> 
{

	List<QuestionRound> getQuestionRoundWithQuestionId(String questionId);

    List<QuestionRound> getQuestionRoundShowUser(String questionId);

	List<QuestionInfo> getQuestionInfoWithCatalogId(String catalogId);

	List<QuestionInfo> getUnabsorbedQuestion();

	Serializable saveQuestionRound(QuestionRound questionRound);

	void deleteQuestion(String questionId);

	JSONArray getQuestionInfo(Map<String,Object>queryParamsMap, PageDesc pageDesc);

    List<QuestionInfo> getQuestionInfoWithOperator(Map<String,Object>queryParamsMap, PageDesc pageDesc);

	QuestionRound replayQuestion(QuestionRound questionRound);

    QuestionRound discussQuestion(QuestionRound questionRound);

	Serializable createQuestion(QuestionInfo questionInfo);

	String evaluateAndCloseQuestion(String score,String questionId);

	String closeQuestion(String questionId);

    QuestionRound updateShowUserTag(String roundId,String showUser);

    QuestionRound updateDiscuss(QuestionRound questionRound);

	Serializable createAssistOperator(AssistOperator assistOperator);

	void deleteObject(AssistOperatorId assistOperatorId);
}
