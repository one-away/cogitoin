import Link from 'next/link'
import { Brain, Target, TrendingUp, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              AI 시대의 사고력을<br />
              <span className="text-primary-200">5분만에 훈련하세요</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 animate-slide-up">
              Cogito:in은 비판적 사고, 직관, 창의성을 체계적으로 훈련하는<br className="hidden sm:block" />
              AI 기반 브레인트레이닝 서비스입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                href="/learn"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                무료로 시작하기
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              사고력 향상을 위한 체계적인 훈련
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              매일 5분, AI 멘토와 함께하는 맞춤형 사고력 트레이닝
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">비판적 사고</h3>
              <p className="text-gray-600">
                논리적 추론과 근거 기반 판단력을 기르는 체계적인 훈련
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">직관 강화</h3>
              <p className="text-gray-600">
                빠른 판단력과 패턴 인식 능력을 향상시키는 실전 훈련
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">창의성 확장</h3>
              <p className="text-gray-600">
                고정관념을 깨고 독창적인 사고를 개발하는 창의 과제
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              간단한 시작, 놀라운 변화
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              매일 단 5분의 투자로 사고력의 변화를 경험하세요
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">개념 학습</h3>
                <p className="text-gray-600 text-sm">
                  심리학과 논리학의 핵심 개념을 쉽고 재미있게 학습
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">실전 문제</h3>
                <p className="text-gray-600 text-sm">
                  실생활에 적용 가능한 상황별 문제 해결
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI 피드백</h3>
                <p className="text-gray-600 text-sm">
                  AI 멘토의 맞춤형 피드백으로 지속적인 성장
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            첫 7일간 무료로 모든 기능을 체험해보세요
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            무료 체험 시작하기
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">70%</span>
              </div>
              <p className="text-gray-600">평균 사고력 향상률</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5분</div>
              <p className="text-gray-600">하루 평균 학습 시간</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">30%</div>
              <p className="text-gray-600">3일 이내 재방문률</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}