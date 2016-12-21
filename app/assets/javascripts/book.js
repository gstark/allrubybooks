$(document).on('turbolinks:load', function() {
  setInterval(function() {
    $('#log').append('<span>Ping </span>')
  }, 1000)

  $('#author').on('change', function(event) {
    console.log('CHANGED')
    var author_id = $(this).val()

    console.log('the author is ' + author_id)

    $.ajax({ url: '/books/index',
             data: { author: author_id },
             dataType: 'script'
           })
    console.log('Ending...')
  })
})
