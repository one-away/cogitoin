'use client'

import { useState } from 'react'
import { TrendingUp, Brain, Target, Sparkles, Calendar, Award, Clock } from 'lucide-react'

const mockProgressData = {
  totalDays: 7,
  currentStreak: 3,
  totalQuizzes: 15,
  correctAnswers: 11,
  skills: {
    critical: { name: '비판적 사고', score: 72, change: +5 },
    intuition: { name: '직관', score: 68, change: +3 },
    creativity: { name: '창의성', score: 85, change: +8 },
  },
  weeklyActivity: [
    { day: '월', completed: true },
    { day: '화', completed: true },
    { day: '수', completed: true },
    { day: '목', completed: false },
    { day: '금', completed: false },
    { day: '토', completed: false },
    { day: '일', completed: false },
  ],
  achievements: [
    { id: 1, name: '첫 걸음', description: '첫 퀴즈 완료', earned: true },
    { id: 2, name: '3일 연속', description: '3일 연속 학습', earned: true },
    { id: 3, name: '사고력 마스터', description: '모든 영역 70점 이상', earned: false },
  ],
}

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month'>('week')

  const accuracyRate = Math.round((mockProgressData.correctAnswers / mockProgressData.totalQuizzes) * 100)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            나의 성장 기록
          </h1>
          <p className="text-lg text-gray-600">
            꾸준한 훈련으로 발전하는 당신의 사고력을 확인하세요
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{mockProgressData.currentStreak}</p>
            <p className="text-sm text-gray-600">연속 학습일</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{accuracyRate}%</p>
            <p className="text-sm text-gray-600">정답률</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{mockProgressData.totalQuizzes}</p>
            <p className="text-sm text-gray-600">완료한 퀴즈</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">35분</p>
            <p className="text-sm text-gray-600">총 학습 시간</p>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">사고력 발전 현황</h2>
          
          <div className="space-y-6">
            {Object.entries(mockProgressData.skills).map(([key, skill]) => (
              <div key={key}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{skill.score}</span>
                    <span className={`text-sm font-medium ${
                      skill.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {skill.change > 0 ? '+' : ''}{skill.change}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      key === 'critical' ? 'bg-blue-500' :
                      key === 'intuition' ? 'bg-purple-500' :
                      'bg-pink-500'
                    }`}
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-700">
              <TrendingUp className="inline-block w-4 h-4 mr-1" />
              이번 주 평균 성장률: <span className="font-semibold">+5.3%</span>
            </p>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">주간 활동</h2>
            
            <div className="flex justify-between items-center">
              {mockProgressData.weeklyActivity.map((day, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    day.completed
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {day.completed ? '✓' : ''}
                  </div>
                  <span className="text-xs text-gray-600">{day.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">획득한 배지</h2>
            
            <div className="space-y-4">
              {mockProgressData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned
                      ? 'bg-yellow-50'
                      : 'bg-gray-50 opacity-50'
                  }`}
                >
                  <Award className={`w-8 h-8 ${
                    achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900">{achievement.name}</p>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivation Message */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">계속해서 성장하고 있어요!</h2>
          <p className="text-primary-100 mb-6">
            3일 연속 학습 중! 내일도 함께 사고력을 키워봐요.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            오늘의 학습 시작하기
          </button>
        </div>
      </div>
    </div>
  )
}