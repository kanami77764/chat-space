$(function(){

    function buildHTML(message){
      if ( message.image ) {
        var html = 
        `<div class="message-list__id">
          <div class="message-list__id__info">
            <div class="message-list__id__info__name">
              ${message.user_name}
            </div>
            <div class="message-list__id__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list__lower">
          <div class="message-list__lower__contents">
            ${message.body}
          </div>
          <img class="message-list__lower__image" src=${message.image}>
          </div>`
        return html;
      }else {
        var html = 
          `<div class="message-list__id">
            <div class="message-list__id__info">
              <div class="message-list__id__info__name">
              ${message.user_name}
              </div>
              <div class="message-list__id__info__date">
              ${message.created_at}
              </div>
            </div>
            <div class="message-list__lower">
              <div class="message-list__lower__contents">
              ${message.body}
              </div>
            </div>
          </div>`
        return html;
      };
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.message-list').append(html);
      $('form')[0].reset();
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました")
    })
    .always(function(){
      $('.form__message__btn').prop('disabled', false);
    })
  });
});
