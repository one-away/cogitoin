'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, Brain, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const concepts = [
  {
    id: 1,
    title: '확증편향',
    category: '비판적 사고',
    description: '자신의 신념을 확인하는 정보만 선택적으로 받아들이는 경향',
    example: '뉴스를 볼 때 자신의 정치적 성향과 일치하는 기사만 읽는 행동',
    difficulty: '초급',
    icon: Brain,
  },
  {
    id: 2,
    title: '인과관계 오류',
    category: '논리적 사고',
    description: '단순한 상관관계를 인과관계로 잘못 해석하는 오류',
    example: '아이스크림 판매량과 익사 사고가 함께 증가한다고 해서 아이스크림이 익사의 원인이라고 생각하는 것',
    difficulty: '초급',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: '창의적 연상',
    category: '창의성',
    description: '서로 관련 없어 보이는 개념들을 연결하여 새로운 아이디어를 만드는 능력',
    example: '벨크로는 엉겅퀴 씨앗이 옷에 달라붙는 것을 보고 발명되었습니다',
    difficulty: '중급',
    icon: BookOpen,
  },
]

export default function LearnPage() {
  const [selectedConcept, setSelectedConcept] = useState<typeof concepts[0] | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            개념 학습
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI 시대에 필요한 사고력의 핵심 개념들을 배워보세요
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {concepts.map((concept) => {
            const Icon = concept.icon
            return (
              <div
                key={concept.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer p-6"
                onClick={() => setSelectedConcept(concept)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {concept.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {concept.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{concept.category}</p>
                <p className="text-gray-600 line-clamp-2">{concept.description}</p>
              </div>
            )
          })}
        </div>

        {/* Selected Concept Detail */}
        {selectedConcept && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedConcept.title}
              </h2>
              <button
                onClick={() => setSelectedConcept(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">정의</h3>
                <p className="text-gray-600">{selectedConcept.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">예시</h3>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-gray-700">{selectedConcept.example}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link
                  href="/quiz"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  이 개념으로 퀴즈 풀기
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Daily Challenge CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">오늘의 사고력 챌린지</h2>
          <p className="mb-6 text-primary-100">
            매일 새로운 개념과 문제로 사고력을 단계별로 향상시켜보세요
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            오늘의 챌린지 시작하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}