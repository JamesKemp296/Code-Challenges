// Your friend has recently started using Codewars to learn more 
// advanced coding. They have just created their first kata, 
// and they want to write a proper description for it, using codeblocks, 
// images and hyperlinks.

// However, they are struggling to understand how to use 
// Markdown formatting properly, so they decide to ask for your help, 
// by having you write a program that will generate some of the 
// syntaxes for you.

function generateMarkdowns(markdown,text,urlOrLanguage) {
  switch(markdown) {
   case 'link':
     return `[${text}](${urlOrLanguage})`
     break;
   case 'img':
     return `![${text}](${urlOrLanguage})`
     break;
   case 'code':
     return "```" + urlOrLanguage + "\n" + text + "\n" + "```"
     break;
   default:
     // code block
 }
};