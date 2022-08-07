import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    console.log(email, feedback);

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    //store that in a database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    // const fileData = fs.readFileSync(filePath);

    const fileData = JSON.parse(fs.readFileSync(filePath));

    const allData = [...fileData, newFeedback];

    // const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(allData));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(200).json({ message: " No Data xd" });
  }
}

export default handler;

//Nextjs will take this function here to execute it for
//incoming requests sent to /API/Feedback

//THis allows us to execute any server side code
//it will never be exposed to client side,
//only to the server side
//This is a good place to put any server side code
//that you want to execute for every request
//to the API/Feedback endpoint

//Now this allows
//And that code now allows us to run our own server side code

// and to add our own application focused API

// to our overall website.

// And that allows us to add features like newsletter,

// signup, user feedback, submission,

// maybe comment submission

// or anything else you need
