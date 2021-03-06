//Materilize selct setup
$(document).ready(function() {
  $('select').material_select();
});

//Copy to clipboard function
new Clipboard('.copybutton');

$(".copybutton").click(function(){
    console.log("Copy Me- Clicked");
  });

//Clear Button
$(".clearAliceIpsum").click(function(){
    $(".AliceIpsumLocation").empty();
      console.log("Clear Me- Clicked");
  });

//Blank array to hold selection
var aaiw = [];
console.log(aaiw);

//Ipsum generation
$(".makeAliceIpsum").click(function(){

  //Get amount
  var amount = $('#ipsum_amount').val();
    console.log("Amount", amount);

  //Get selected Type
  var output_type = $('#output_type').val();
    console.log("Output Type:", output_type);

  //Checks if tags are requested
  var add_p_tag = $('#add_p_tag').prop('checked');
    console.log("Paragraph Tags:", add_p_tag);

  //Get selected chapters
  var chapter = $('#aaiw_chapters').val();
    console.log("Chapters:", chapter);

  //Set null input to be all for error catching
  if (chapter == null ) {
      var chapter = ["aaiw_all"];
    };

  //Push selected chapters into array
  if (chapter.includes("aaiw_c0")) {
      var c0 = aaiw.concat(aaiw_chapter0);
    };

  if (chapter.includes("aaiw_c1") || chapter.includes("aaiw_all")) {
      var c1 = aaiw.concat(aaiw_chapter1);
    };

  if (chapter.includes("aaiw_c2") || chapter.includes("aaiw_all")) {
      var c2 = aaiw.concat(aaiw_chapter2);
    };

  if (chapter.includes("aaiw_c3") || chapter.includes("aaiw_all")) {
      var c3 = aaiw.concat(aaiw_chapter3);
    };

  if (chapter.includes("aaiw_c4") || chapter.includes("aaiw_all")) {
      var c4 = aaiw.concat(aaiw_chapter4);
    };

  if (chapter.includes("aaiw_c5") || chapter.includes("aaiw_all")) {
      var c5 = aaiw.concat(aaiw_chapter5);
    };

  if (chapter.includes("aaiw_c6") || chapter.includes("aaiw_all")) {
      var c6 = aaiw.concat(aaiw_chapter6);
    };

  if (chapter.includes("aaiw_c7") || chapter.includes("aaiw_all")) {
      var c7 = aaiw.concat(aaiw_chapter7);
    };

  if (chapter.includes("aaiw_c8") || chapter.includes("aaiw_all")) {
      var c8 = aaiw.concat(aaiw_chapter8);
    };

  //Array of selected chapters
  var ipsum = aaiw.concat(c0, c1, c2, c3, c4, c5, c6, c7, c8);
  //Removes undefined from array
  ipsum = ipsum.filter(function(n){ return n != undefined });

  console.log("ipsum:", ipsum);

//Check if Paragraph Tags are requested
  if (add_p_tag == true) {
    var p_open = "&lt;p&gt;";
    var p_close = "&lt;/p&gt;";
  };

//Loop through amount to output random AliceIpsum
  //If Characters are selected
  if (output_type.includes("book_characters")) {
    var ipsum_string = ipsum.toString();
    var ipsum_replace = ipsum_string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

        $(".AliceIpsumLocation").prepend(p_close, "<br>");
    for (i = 0; i < amount; i++ ) {
      var random_ipsum = ipsum_replace[Math.floor(Math.random()*ipsum_replace.length)];

    $(".AliceIpsumLocation").prepend(random_ipsum);
      console.log("Chapter- book_characters:", random_ipsum);
    };
        $(".AliceIpsumLocation").prepend(p_open);

  //If Paragraphs are selected
  } else if (output_type.includes("book_paragraphs")) {

    for (i = 0; i < amount; i++ ) {
      var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];
    $(".AliceIpsumLocation").prepend("<p>", p_open, random_ipsum, p_close, + "</p>");
      console.log("Chapter- book_paragraphs:", random_ipsum);
    };

  //If Sentences are selected
  } else if (output_type.includes("book_sentences")) {
    var random_ipsum = ipsum[Math.floor(Math.random()*ipsum.length)];

      console.log("Chapter- book_sentences:", random_ipsum);

  //If Words are selected
  } else if (output_type.includes("book_words")) {
    var ipsum_string = ipsum.toString();
    var ipsum_replace = ipsum_string.replace(/[\.,!]/g,' ').replace(/[^\w\s]/gi, '');
    var ipsum_split = ipsum_replace.split(" ");

        $(".AliceIpsumLocation").prepend(p_close, "<br>");
    for (i = 0; i < amount; i++ ) {
      var random_ipsum = ipsum_split[Math.floor(Math.random()*ipsum_split.length)];

      $(".AliceIpsumLocation").prepend(random_ipsum, " ");
      console.log("Chapter- book_words:", random_ipsum);
      };
        $(".AliceIpsumLocation").prepend(p_open);

    };

});
