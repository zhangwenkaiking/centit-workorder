FROM 172.29.0.13:8082/tomcat-centit:v1
ADD ./centit-workorder-web/target/*.war /usr/local/tomcat/webapps/workorder.war
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
EXPOSE 8080
CMD /usr/local/tomcat/bin/startup.sh && tail -f /usr/local/tomcat/logs/catalina.out
