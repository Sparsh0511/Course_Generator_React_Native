import dedent from 'dedent';

export default {
  IDEA: dedent`::As your are coaching teacher
- User want to learn about the topic
- Generate 5-7 Course title for study (Short)
- Make sure it is releated to description
- Output will be ARRAY of String inside a JSON object and the object name will be course_titles JSON FORMAT only
- Do not add any plain text in output,
`,
  COURSE: dedent`: As you are coaching teacher
- User want to learn about all topics
- Create 2 Courses With Course Name, Description, and 3 Chapters in each course
- Make sure to add chapters with all learning material course wise
- Add CourseBanner Image from ('/banner1.png','/banner2.png','/banner3.png','/banner4.png')
- Explain in the chapter content as detailed tutorial
- Generate 5 Quizz, 10 Flashcard and 5 Questions answer

- Outupt in JSON Format only
- "courses": [
{
  "courseTitle": '<Intro to Python>',
  "description": '',
  "banner_image": "/banner1.png",
  "chapters": [
    {
      chapterName: '',
      content" [
         {
           topic: '<Topic Name in 2 to 4 words. ex. (Creating Variables)'>,
           explain: '<Detailed Explanation tutorial'>,
  	       code: '<Code example if required else null',
           example: '<example if required else null'>
        }
	    ]
	  }
],
quiz: [
	{
	  question: '',
    options: ['a',b,c,d],
    correctAns:''
  }
],
flashcards: [
  {
    front:'',
    back:'',
  }
],
qa:[
  {
    question:'',
    answer:'',
  }
]
}
]`

}