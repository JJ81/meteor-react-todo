// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // This code is executed on the client only
  Meteor.startup(function () {
    // React.render is deprecated.
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));

  });
/*
* TODO package 설치를 통해서 자동으로 입력된 부분의 디자인을 수정하는 방법은 무엇인가?
* login :
* validation을 수정하려면?
* cookie를 사용해서 로그인을 처리하고 있다(로그인 동작 원리에 몇 가지 더 알아보자)
* 세션과 쿠키의 용도에 대해서 구분하여 정리해보자
* 로그인 yijaejun/rhee0124
* SSL없이 로그인을 처리할 경우 어떤 위험이 있는가?
* http://clipplr-todo.meteor.com 를 보면 랜더링상에서 로그인 버튼이 로딩되는데 인터벌이 발생한다
* 수정방안을 파악해보자.
*
* */

  setTimeout(function () {
    $('.new-task input').focus();
  }, 100);

  $('li').bind('click', function () {
    console.log('click');
    // $(this).find('input[type=checkbox]').attr(checked);
  });

}