const quizData = [
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Bangalore', 'Kolkata'],
      correctAnswer: 'New Delhi'
    },
    {
      question: 'Which river is known as the "Ganga" in India?',
      options: ['Yamuna', 'Brahmaputra', 'Indus', 'Ganges'],
      correctAnswer: 'Ganges'
    },
    {
      question: 'Which festival is known as the "Festival of Lights" in India?',
      options: ['Diwali', 'Holi', 'Eid', 'Navratri'],
      correctAnswer: 'Diwali'
    },
    {
      question: 'Which mountain range separates the Indian subcontinent from the Tibetan Plateau?',
      options: ['Himalayas', 'Andes', 'Alps', 'Rockies'],
      correctAnswer: 'Himalayas'
    },
    {
      question: 'What is the national flower of India?',
      options: ['Rose', 'Lotus', 'Sunflower', 'Tulip'],
      correctAnswer: 'Lotus'
    },
    {
      question: 'Which Indian state is known as the "Land of Five Rivers"?',
      options: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan'],
      correctAnswer: 'Punjab'
    },
    {
      question: 'Which Indian city is famous for its tea gardens and is known as the "Tea Capital of India"?',
      options: ['Darjeeling', 'Munnar', 'Ooty', 'Shillong'],
      correctAnswer: 'Darjeeling'
    },
    {
      question: 'In which year did India gain independence?',
      options: ['1945', '1947', '1950', '1952'],
      correctAnswer: '1947'
    },
    {
      question: 'Which Indian state is known as the "Spice Garden of India"?',
      options: ['Kerala', 'Karnataka', 'Gujarat', 'Andhra Pradesh'],
      correctAnswer: 'Kerala'
    },
    {
      question: 'What is the currency of India?',
      options: ['Rupee', 'Yen', 'Dollar', 'Euro'],
      correctAnswer: 'Rupee'
    },
    {
      question: 'Which Indian leader is known as the "Father of the Nation"?',
      options: ['Jawaharlal Nehru', 'Subhas Chandra Bose', 'Sardar Patel', 'Mahatma Gandhi'],
      correctAnswer: 'Mahatma Gandhi'
    },
    {
      question: 'What is the largest state in India by area?',
      options: ['Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Maharashtra'],
      correctAnswer: 'Rajasthan'
    },
    {
      question: 'Which Indian city is famous for its IT industry and is known as the "Silicon Valley of India"?',
      options: ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai'],
      correctAnswer: 'Bangalore'
    },
    {
      question: 'Who wrote the Indian national anthem?',
      options: ['Rabindranath Tagore', 'Bankim Chandra Chattopadhyay', 'Sarojini Naidu', 'Jawaharlal Nehru'],
      correctAnswer: 'Rabindranath Tagore'
    },
    {
      question: 'Which Indian state is known as the "Land of the Rising Sun"?',
      options: ['Arunachal Pradesh', 'Assam', 'Nagaland', 'Manipur'],
      correctAnswer: 'Arunachal Pradesh'
    },
    {
      question: 'Which Indian city is famous for the Taj Mahal?',
      options: ['Jaipur', 'Delhi', 'Agra', 'Lucknow'],
      correctAnswer: 'Agra'
    },
    {
      question: 'Which river is known as the "Dakshin Ganga"?',
      options: ['Godavari', 'Krishna', 'Cauvery', 'Yamuna'],
      correctAnswer: 'Godavari'
    },
    {
      question: 'In which state is the Jim Corbett National Park located?',
      options: ['Uttarakhand', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'],
      correctAnswer: 'Uttarakhand'
    },
    {
      question: 'What is the official language of the Indian government?',
      options: ['Hindi', 'English', 'Sanskrit', 'Bengali'],
      correctAnswer: 'Hindi'
    },
    {
      question: 'Ceo of Alphabet company?',
      options: ['Sudarpichai','larry page','Andrew E.Rubi','Sergey Brin'],
      correctAnswer: 'Sudarpichai'
    },
   
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const resultElement = document.getElementById('result');

    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = '';

    quizData[currentQuestion].options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(optionElement);
    });

    resultElement.textContent = '';
  }

  function checkAnswer(optionIndex) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const selectedAnswer = quizData[currentQuestion].options[optionIndex];
    const resultElement = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
      resultElement.textContent = 'NEXT';
      score++;
    } else {
      resultElement.textContent = `NEXT`;
    }
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }

  function showFinalResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultElement = document.getElementById('result');

    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
      <p>Your score is: ${score} out of ${quizData.length}</p>`;
  }

  // Initial load
  loadQuestion();
  function checkAnswer(optionIndex) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const selectedAnswer = quizData[currentQuestion].options[optionIndex];
    const resultElement = document.getElementById('result');
    const optionsContainer = document.getElementById('options-container');
  
    // Reset previous selections
    const options = optionsContainer.getElementsByClassName('option');
    for (const option of options) {
      option.classList.remove('selected');
    }
  
    // Highlight the selected option
    const selectedOption = optionsContainer.getElementsByClassName('option')[optionIndex];
    selectedOption.classList.add('selected');
  
    if (selectedAnswer === correctAnswer) {
      resultElement.innerHTML = '<h2 style="color: #28a745;">next! &#10004;</h2>';
      score++;
    } else {
      resultElement.innerHTML = '<h2 style="color: #28a745;">next! &#10004;</h2>';
    }
  }
  