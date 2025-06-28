'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, MessageSquare, Send } from 'lucide-react'

const quizQuestions = [
  {
    id: 1,
    concept: '확증편향',
    question: '다음 중 확증편향의 예시로 가장 적절한 것은?',
    options: [
      '새로운 정보를 접할 때 신중하게 검토하는 것',
      '자신이 지지하는 정당의 정책만 긍정적으로 해석하는 것',
      '다양한 관점에서 문제를 바라보려고 노력하는 것',
      '전문가의 의견을 무조건 신뢰하는 것',
    ],
    correctAnswer: 1,
    explanation: '확증편향은 자신의 기존 신념을 지지하는 정보만 선택적으로 받아들이는 경향입니다.',
  },
  {
    id: 2,
    concept: '인과관계 오류',
    question: '한 마을에서 황새의 수가 많을수록 출생률이 높다는 통계가 나왔습니다. 이에 대한 올바른 해석은?',
    options: [
      '황새가 아기를 가져다준다',
      '황새와 출생률 사이에는 직접적인 인과관계가 있다',
      '농촌 지역일수록 황새도 많고 출생률도 높을 수 있다',
      '통계는 항상 인과관계를 나타낸다',
    ],
    correctAnswer: 2,
    explanation: '상관관계가 인과관계를 의미하지는 않습니다. 제3의 변수(농촌 지역의 특성)가 두 현상에 모두 영향을 줄 수 있습니다.',
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [userFeedback, setUserFeedback] = useState('')
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  const question = quizQuestions[currentQuestion]

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setShowFeedbackForm(true)
    }
  }

  const handleSubmitFeedback = () => {
    console.log('User feedback:', userFeedback)
    alert('피드백이 제출되었습니다! AI 멘토가 곧 분석 결과를 보내드릴게요.')
    setUserFeedback('')
    setShowFeedbackForm(false)
  }

  if (showFeedbackForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              퀴즈 완료! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              총 {quizQuestions.length}문제 중 {score}문제를 맞추셨습니다.
            </p>
            
            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <MessageSquare className="inline-block w-5 h-5 mr-2 text-primary-600" />
                오늘의 학습 소감을 들려주세요
              </h3>
              <p className="text-gray-600 mb-4">
                AI 멘토가 당신의 사고 과정을 분석하고 맞춤형 피드백을 제공합니다.
              </p>
              <textarea
                value={userFeedback}
                onChange={(e) => setUserFeedback(e.target.value)}
                placeholder="오늘 배운 개념에 대한 생각이나 어려웠던 점을 자유롭게 작성해주세요..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={4}
              />
              <button
                onClick={handleSubmitFeedback}
                disabled={!userFeedback.trim()}
                className="mt-4 inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                AI 피드백 받기
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              문제 {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <span className="text-sm text-gray-600">
              점수: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              {question.concept}
            </span>
            <h2 className="text-xl font-semibold text-gray-900">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                    : selectedAnswer === index
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3 mt-0.5">
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </span>
                  <span className="text-gray-800">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Result & Explanation */}
          {showResult && (
            <div className="animate-fade-in">
              <div className={`p-4 rounded-lg mb-4 ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                <p className="font-semibold">
                  {selectedAnswer === question.correctAnswer
                    ? '정답입니다! 🎉'
                    : '아쉽네요. 다시 생각해보세요! 🤔'}
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">해설:</span> {question.explanation}
                </p>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                {currentQuestion < quizQuestions.length - 1
                  ? '다음 문제'
                  : '결과 보기'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}