import React, { Component } from 'react';
import './TextCookie.css';

let title0 = "Ghosts and Rejections:"
let text0 = "I applied to 58 different companies for product management internships for the summer of 2020. I was ghosted by 46% of these companies and immediately rejected by another 37%."
let title1 = "First Rounds:"
let text1 = "I got to the first round of 12% or 7 of the 58 companies I applied to. Of the seven first round interviews, five were relatively short calls with recruiters about why I wanted to work at the company, what strengths and weaknesses were, if I was eligible to work in the United States, etc. Two of the first round interviews were take-home assignments. The take home assignments were questions like “improve a product that you use every day with mock-ups.” Or, “What are the fundamental problems that Airbnb solves and extend one of their features.”"
let title2 = "Second Rounds:"
let text2 = "Of my seven first rounds, I moved on to four second rounds. For one second round I was given another take-home. For the other three seconds rounds, they were what I would call “product interviews” between one to two hours with one to three interviewers. The interviews had questions about what my favorite products were, what I would do to change them, explaining my resume and my past work, talking about key metrics products should track. I used the book Decode and Conquer to prepare for these types of interviews and it was very helpful."
let title3 = "Final Rounds:"
let text3 = "I made it to the final round of 5% (3 firms) of the original companies that I applied for (one of which the final round was the second round). The interviews were pretty much the same at the second round except they were all two hours with three different interviewers. The format was pretty much the same in that the first person you would talk to would warm you up by asking about your resume and then the next two would ask you more pointed product questions."
let title4 = "Offers:"
let text4 = "In the end, I only got one offer from my 58 applications (1.72%) and I liked the company a lot so I accepted it."
let title5 = "Take-Aways:"
let text5 = "The more time a company invests in you, the more likely they are to give you an offer. Having their employees actually take time to interview says a lot more than them just sending you a take-home. This is really a numbers game. Start early and try to get into a routine of applying to 10-20 places every week on a certain day. I found that companies that require you to make a Workday account or another account to apply to their internship generally aren’t worth your time."
let title6 = "Reflection:"
let text6 = "This process really sucked. I was pretty down in the dumps when I kept getting denied from company after company. I would make it really far at one firm only to be rejected again. I think part of this came from my experience with applying to colleges where I applied to about 13 schools and got into most of them. With applying to tech internships, the hit rate is just so much lower and that’s part of the game. The offer I got was from a cool startup that got bought from a large corporation which is dope because it’s a cool work environment without the lack of job security a startup usually has. I guess things have a way of working out in the end :)"

class TextCookie extends Component {
  
  render() {
    
    function returnTitle(displayNum) {
        if (displayNum === "0") {
            return title0
        } else if (displayNum === "1") {
            return title1
        } else if (displayNum === "2") {
            return title2
        } else if (displayNum === "3") {
            return title3
        } else if (displayNum === "4") {
            return title4
        } else if (displayNum === "5") {
            return title5
        } else {
            return title6
        }
    }

    function returnText(displayNum) {
        if (displayNum === "0") {
            return text0
        } else if (displayNum === "1") {
            return text1
        } else if (displayNum === "2") {
            return text2
        } else if (displayNum === "3") {
            return text3
        } else if (displayNum === "4") {
            return text4
        } else if (displayNum === "5") {
            return text5
        } else {
            return text6
        }
    }

    return (
      <div className="textCookie">
        <h1 className="title">{returnTitle(this.props.displayNum)}</h1>
        <p className="text">{returnText(this.props.displayNum)}</p>
        
      </div>
    );
  }
}

export default TextCookie