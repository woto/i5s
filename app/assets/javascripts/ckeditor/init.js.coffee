$(document).on 'page:change', ->

  conf = 
    height: 400
    extraPlugins: 'divarea,oembed,codemirror';

  if $('#page_content').length > 0
    CKEDITOR.replace('page_content', conf)
