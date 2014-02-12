$ ->

  conf = 
    height: 400
    extraPlugins: 'divarea,oembed,codemirror';
    allowedContent: true

  if $('#page_content').length > 0
    CKEDITOR.replace('page_content', conf)
