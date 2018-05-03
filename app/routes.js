const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes and copy here - above the module.exports line

router.get('/00', function (req, res) {
  res.render('00', 
    { 
      'a_1': "Hello, I'm a virtual advisor and I'm here to offer you information and guidance about organising care and support for leaving hospital.",
      'u_1' : "Ok",
      'u_2' : "What is a virtual advisor?"
    }
  )
})

router.post('/00', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('01_u_1')
  } 
  else {
    res.redirect('01_u_2')
  }
})

//////////

router.get('/01_u_1', function (req, res) {
  res.render('01_u_1', 
    { 
      'a_1': "I will be asking you some questions to learn about your situation. From our chat I will be able to give you some recommendations that you can take a look at now or later.",
      'a_2': "This is the first time we are chatting and getting to know each other, so I need to ask a few questions. You can stop and take a break anytime.",
      'a_3': "Does that sound ok?",
      'u_1' : "Yes, that's OK",
      'u_2' : "What kind of questions?",
      'u_3' : "What kind of recommendations?"
    }
  )
})

router.post('/01_u_1', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('02_u_1')
  } 
  else {
    res.redirect('#')
  }
})

//////////

router.get('/01_u_2', function (req, res) {
  res.render('01_u_2', 
    { 
      'a_1': "I’m not a real person, but I have been made by real people. The questions I ask are automated and based on the information you provide.",
      'a_2': "You can also think of me as a chatbot; a computer program that simulates human conversation.",
      'a_3': "I am able to provide guidance to people who are leaving hospital and looking for help to organise care and support.",
      'u_1' : "OK"
    }
  )
})

router.post('/01_u_2', function (req, res) {
  res.redirect('01_u_1')
})

//////////

router.get('/02_u_1', function (req, res) {
  res.render('02_u_1', 
    { 
      'a_1': "That’s great, let’s get started then.",
      'a_2': "Are you answering these questions for yourself or on behalf of someone else?",
      'u_1' : "For myself",
      'u_2' : "For someone else"
    }
  )
})

router.post('/02_u_1', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('03_u_1')
  }
  else {
    res.redirect('03_u_2')
  }
})

//////////

router.get('/03_u_1', function (req, res) {
  res.render('03_u_1', 
    { 
      'a_1': "What is your age?",
      'u_1': "Option 1",
      'u_2': "Option 2",
      'u_3': "Option 3"
    }
  )
})

router.post('/03_u_1', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('04_01')
  }
  else {
    res.redirect('04_01')
  }
})

//////////

router.get('/03_u_2', function (req, res) {
  res.render('03_u_2', 
    { 
      'a_1': "What is their age?",
      'u_1': "Option 1",
      'u_2': "Option 2",
      'u_3': "Option 3"
    }
  )
})

router.post('/03_u_2', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('04_02')
  }
  else {
    res.redirect('04_02')
  }
})

//////////


router.get('/04_01', function (req, res) {
  res.render('04_01', 
    { 
      'a_1': "Are you currently in the hospital?",
      'u_1': "Yes",
      'u_2': "No"
    }
  )
})

router.post('/04_01', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('04_01_u_1')
  }
  else {
    res.redirect('#')
  }
})

//////////

router.get('/04_01_u_1', function (req, res) {
  res.render('04_01_u_1', 
    { 
      'a_1': "Do you know when you are going home?",
      'u_1': "Today",
      'u_2': "Tomorrow",
      'u_3': "Later",
      'u_4': "I don't know yet"
      // 'u_4': "I know the exact date"
    }
  )
})

router.post('/04_01_u_1', function (req, res) {
  res.redirect('05')
})

//////////

router.get('/04_02', function (req, res) {
  res.render('04_02', 
    { 
      'a_1': "Are they currently in the hospital?",
      'u_1': "Yes",
      'u_2': "No"
    }
  )
})

router.post('/04_02', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('04_02_u_1')
  }
  else {
    res.redirect('#')
  }
})

//////////

router.get('/04_02_u_1', function (req, res) {
  res.render('04_02_u_1', 
    { 
      'a_1': "Do you know when they are going home?",
      'u_1': "Today",
      'u_2': "Tomorrow",
      'u_3': "Later",
      'u_4': "I don't know yet"
      // 'u_4': "I know the exact date"
    }
  )
})

router.post('/04_02_u_1', function (req, res) {
  res.redirect('05')
})

//////////

router.get('/05', function (req, res) {
  res.render('05', 
    { 
      'a_1': "Do you want to find something now or a bit later?",
      'u_1': "Now",
      'u_2': "Later"
    }
  )
})

router.post('/05', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_2') {
    res.redirect('06_u_2')
  }
  else {
    res.redirect('#')
  }
})

router.get('/06_u_2', function (req, res) {
  res.render('06_u_2', 
    { 
      'a_1': "OK, I'll check in with you later by sending you a text message to your mobile."
    }
  )
})

router.get('/07', function (req, res) {
  res.render('07', 
    { 
      'a_1': "What can I help you with today?",
      'u_1': "Falling over",
      'u_2': "Cleaning",
      'u_3': "Feeling lonely",
      'u_4': "Care costs",
      'u_5': "I don't know"
    }
  )
})

router.post('/07', function (req, res) {
  var options = req.body["option"]

  if (options == 'u_1') {
    res.redirect('08_u_1')
  }
  else if (options == 'u_2') {
    res.redirect('08_u_2')
  }
  else if (options == 'u_3') {
    res.redirect('08_u_3')
  }
  else if (options == 'u_4') {
    res.redirect('08_u_4')
  }
  else {
    res.redirect('08_u_5')
  }
})

//////////

router.get('/08_u_5', function (req, res) {
  res.render('08_u_5', 
    { 
      'a_1': "It sounds like you may need to talk to someone to get more help than I can provide at this stage. You might want to consider these questions before talking with somebody:",
      'a_2': "What kinds of things would you like to be able to do but now struggle with?",
      'a_3': "What kinds of things would they like to be able to do but now struggle with?",
      'a_4': "What is working well at the moment?",
      'a_5': "What needs to change to make things easier?",
      'a_6': "When you are ready to talk with someone, let me know."
    }
  )
})

module.exports = router
