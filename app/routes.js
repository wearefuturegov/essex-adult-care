const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes and copy here - above the module.exports line

router.get('/example', function (req, res) {
  res.render('example', 
    { 
      'heading': "Hello, I am here to offer you some guidance and support. I’m a virtual advisor.",
      'q_1' : "Got it",
      'q_2' : "Are you are a real person?",
      'heading_b': "I’m a virtual advisor or you can also think of me as a chat bot. A computer program that simulates human conversation.",
      'q_1_b' : "OK",
      'heading_c': "I will be asking you some questions to learn more about what your concerns and enquiries are. From our chat I will also be able to give you some recommendations that you can take a look at. This is the first time we are chatting and getting to know each other, so I need to ask a few questions. You can stop and take a break anytime. Does that sound ok?",
      'q_1_c' : "Yes, that's OK",
      'q_2_c' : "What questions?",
      'q_3_c' : "What recommendations?",
      'heading_d': "I’ll be asking about abilities to do daily tasks in and out of the home. This will allow me to better understand what you/they might be struggling with. It will help me make better suggestions for you.",
      'q_1_d' : "Yes, that's OK",
      'heading_e': "That’s great, let’s get started then. Are you answering these questions for yourself or on behalf of someone?",
      'q_1_e' : "Myself",
      'q_2_e' : "On behalf of someone else"
    }
  )
})

router.get('/hello', function (req, res) {
  res.render('hello', 
    { 
      'heading': "Hello, I am here to offer you some guidance and support. I’m a virtual advisor.",
      'q_1' : "Got it",
      'q_2' : "Are you are a real person?"
    }
  )
})

router.get('/are_you_real', function (req, res) {
  res.render('are_you_real', 
    { 
      'heading': "I’m a virtual advisor or you can also think of me as a chat bot.",
      'body' : "A computer program that simulates human conversation.",
      'q_1' : "OK"
    }
  )
})

router.get('/got_it', function (req, res) {
  res.render('got_it', 
    { 
      'heading': "I will be asking you some questions to learn more about what your concerns and enquiries are.",
      'body' : "From our chat I will also be able to give you some recommendations that you can take a look at. This is the first time we are chatting and getting to know each other, so I need to ask a few questions. You can stop and take a break anytime. Does that sound ok?",
      'q_1' : "Yes, that's OK",
      'q_2' : "What questions?",
      'q_3' : "What recommendations?"
    }
  )
})

router.get('/what_questions', function (req, res) {
  res.render('what_questions', 
    { 
      'heading': "I’ll be asking about abilities to do daily tasks in and out of the home.",
      'body' : " This will allow me to better understand what you/they might be struggling with. It will help me make better suggestions for you.",
      'q_1' : "Yes, that's OK"
    }
  )
})

router.get('/start', function (req, res) {
  res.render('start', 
    { 
      'heading': "That’s great, let’s get started then. Are you answering these questions for yourself or on behalf of someone?",
      'q_1' : "Myself",
      'q_2' : "On behalf of someone else"
    }
  )
})

router.get('/someone_else', function (req, res) {
  res.render('someone_else', 
    { 
      'heading': "What is the person's age?",
      'hint' : "For example, 57"
    }
  )
})

router.get('/in_hospital', function (req, res) {
  res.render('in_hospital', 
    { 
      'heading': "Are they currently in hospital?",
      'q_1' : "Yes",
      'q_2' : "No"
    }
  )
})

router.get('/biggest_concern', function (req, res) {
  res.render('biggest_concern', 
    { 
      'heading': "What is your biggest concern at the moment about this person?",
      'q_1' : "Ability to do daily tasks",
      'q_2' : "Looking after themselves",
      'q_3' : "Staying safe at home",
      'q_4' : "Getting out and about",
      'q_5' : "Managing money",
      'q_6' : "Looking after someone else",
      'q_7' : "Something else"
    }
  )
})

router.get('/staying_safe', function (req, res) {
  res.render('staying_safe', 
    { 
      'heading': "What would you like to know about staying safe at home?",
      'q_1' : "Getting help in an emergency",
      'q_2' : "Fire prevention services",
      'q_3' : "Living with dementia",
      'q_4' : "No, that’s all for now",
      'q_5' : "No, but I’d like help with something else"
    }
  )
})

router.get('/emergency', function (req, res) {
  res.render('emergency', 
    { 
      'heading': "Here are some things that can help:",
      'body' : "Pendant alarms are devices that can be triggered in emergencies or accidents, like when someone falls in the home. They are good if the person at risk is home alone. A key safe is a secure metal box that stores a spare key on the outside of the home as a convenient way for you or visitors to enter the home. You might want to consider this if the door can’t be reached easily from the inside. There are also fall sensors that can detect if a person falls in the home and will alert someone. Would you like to learn more about these options and how to get them?",
      'q_1' : "Yes",
      'q_2' : "No, thanks"
    }
  )
})


// Add your form rules here

router.post('/hello', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('got_it')
  } 
  else {
    res.redirect('are_you_real')
  }
})

router.post('/are_you_real', function (req, res) {
  res.redirect('got_it')
})


router.post('/got_it', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('start')
  } 
  else if (changedName == 'q_2') {
    res.redirect('what_questions')
  } 
  else {
    res.redirect('#')
    // res.redirect('what_recommendations')
  }
})

router.post('/what_questions', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('start')
  }
  else {
    res.redirect('start')
  }
})

router.post('/start', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('#')
    // res.redirect('myself')
  }
  else {
    res.redirect('someone_else')
  }
})

router.post('/someone_else', function (req, res) {
  res.redirect('in_hospital')
})

router.post('/in_hospital', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('biggest_concern')
  }
  else {
    res.redirect('#')
  }
})

router.post('/biggest_concern', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_3') {
    res.redirect('staying_safe')
  }
  else {
    res.redirect('#')
  }
})

router.post('/staying_safe', function (req, res) {
  var changedName = req.body["option"]

  if (changedName == 'q_1') {
    res.redirect('emergency')
  }
  else {
    res.redirect('#')
  }
})

module.exports = router
