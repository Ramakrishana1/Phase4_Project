import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[]=[
    {
      question : 'What does HTML stand for ',
      answer:[
        {option: 'Hyperlink Markup Language ' , correct : false},
        {option: 'Hyperlink and Text Markup Language ' , correct : false},
        {option: 'Hyper Text Markup Language ' , correct : true},
        {option: 'Home Tool Markup Language ' , correct :false }
      ]
    },
{
    question : 'Choose the correct HTML tag for the largest heading ',
    answer:[
      {option: '<heading> ' , correct : false},
      {option: '<h6> ' , correct : false},
      {option: '<head> ' , correct : false},
      {option: '<h1> ' , correct :true }
    ]
  },
{
  question : 'What is the correct HTML tag for inserting a line-break ',
  answer:[
    {option: '<hr> ' , correct : false},
    {option: '<lb> ' , correct : false},
    {option: '<br> ' , correct : true},
    {option: '<break> ' , correct :false }
  ]
},
{
question : 'How do you make a numbered list ',
answer:[
  {option: '<ol> ' , correct : true},
  {option: '<ul> ' , correct : false},
  {option: '<dl> ' , correct : false},
  {option: '<list> ' , correct :false }

]
},
{
question : 'What is the corerct HTML for making a checkbox ',
answer:[
  {option: '<input type = "checkbox"> ' , correct : true},
  {option: '<checkbox> ' , correct : false},
  {option: '<check> ' , correct : false},
  {option: '<input type = "check"> ' , correct :false }

]
},
{
question : 'What does CSS stand for ',
answer:[
  {option: 'Cascading Style Sheets ' , correct : true},
  {option: 'Creative Style Sheets ' , correct : false},
  {option: 'Computer Style Sheets ' , correct : false},
  {option: 'Colorful Style Sheets ' , correct :false }

]
},
{
question : 'What is the correct CSS syntax ',
answer:[
  {option: 'body {color: black;} ' , correct : true},
  {option: 'body:color=black; ' , correct : false},
  {option: '{body:color=black;} ' , correct : false},
  {option: 'body = black; ' , correct :false }

]
},
{
question : 'What property is used to change the background color ',
answer:[
  {option: 'color ' , correct : false},
  {option: 'bgcolor ' , correct : false},
  {option: 'background-color ' , correct : true},
  {option: 'bgc ' , correct :false }

]
},
{
question : 'What property is used to change th left margin of an element ',
answer:[
  {option: 'padding-left ' , correct : true},
  {option: 'margin-left ' , correct : false},
  {option: 'margin ' , correct : false},
  {option: 'indent ' , correct :false }

]
},
]
  
  constructor() { }
  getQuizzes()
  {
    return this.quizzes;
  }

}
