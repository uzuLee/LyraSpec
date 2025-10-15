const contentData = {
    syntax: {
        basic: {
            title: "기본 구조 및 단축 문법",
            description: "Lyra의 모든 구조는 `@`로 시작하여 `@end`로 끝나는 블록 형태입니다. v2.0에서는 간단한 블록을 한 줄로 표현할 수 있는 단축 문법을 지원하여 생산성을 높입니다.",
            content: `
                <div class="flex items-center justify-end mb-4">
                    <label for="syntax-toggle" class="mr-3 text-sm font-medium text-gray-700">v2.0 단축 문법 보기</label>
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="syntax-toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label for="syntax-toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>
                <div id="syntax-example">
                </div>
                <style>.toggle-checkbox:checked { right: 0; border-color: #4f46e5; } .toggle-checkbox:checked + .toggle-label { background-color: #4f46e5; }</style>
            `,
            examples: {
                standard: `
<div class="code-block">
<span class="comment"># 기본 문법: 모든 블록은 @end로 종료됩니다.</span>
<span class="keyword">@panel</span> introduction
  <span class="property">title</span>: <span class="string">"Lyra의 기본 구조"</span>
  <span class="property">description</span>: <span class="string">"모든 블록은 '@'로 시작하고 '@end'로 끝난다."</span>
<span class="keyword">@end</span>

<span class="comment"># 참조 문법</span>
<span class="property">source</span>: <span class="value">ref:document.id</span>
</div>`,
                sugar: `
<div class="code-block">
<span class="comment"># 단축 문법: 간단한 블록은 @로 한 줄 종료가 가능합니다.</span>
<span class="keyword">@panel</span> quick.note <span class="keyword">@</span> <span class="property">title</span>=<span class="string">"단축 구문 테스트"</span> <span class="property">text</span>=<span class="string">"간단 구문 적용"</span> <span class="keyword">@</span>

<span class="comment"># 단축 참조 문법</span>
<span class="property">source</span>: <span class="value">@document.id</span>
</div>`
            }
        },
        types: {
            title: "데이터 타입 및 컬렉션",
            description: "Lyra는 문자열, 숫자, 날짜 등 다양한 기본 타입을 지원하며, 배열(List)과 맵(Map) 형태의 복합 자료구조도 사용할 수 있습니다.",
            content: `
<div class="code-block">
<span class="comment"># 기본 데이터 타입</span>
<span class="keyword">@config</span> <span class="value">general</span>
  <span class="property">author</span>: <span class="string">"Orion Systems"</span>
  <span class="property">version</span>: <span class="value">1.2.4</span>
  <span class="property">is_public</span>: <span class="value">true</span>
  <span class="property">release_date</span>: <span class="value">2031-06-11</span>
<span class="keyword">@end</span>

<span class="comment"># 컬렉션 타입 (배열과 맵)</span>
<span class="keyword">@panel</span> <span class="value">attendees</span>
  <span class="comment"># 배열 (List)</span>
  <span class="property">list</span>: [<span class="string">"Aria"</span>, <span class="string">"Rion"</span>, <span class="string">"Seren"</span>]

  <span class="comment"># 맵 (Map)</span>
  <span class="property">metadata</span>: { <span class="property">role</span>: <span class="string">"speaker"</span>, <span class="property">verified</span>: <span class="value">true</span> }
<span class="keyword">@end</span>
</div>`
        },
        extended: {
            title: "확장 문법 (v2.0)",
            description: "개발자 중심의 콘텐츠 작성을 위해 테이블, 수학 수식, 코드 블록 등 실용적인 확장 블록을 새롭게 지원합니다.",
            content: `
<div class="code-block">
<span class="comment"># 테이블 예시</span>
<span class="keyword">@table</span> <span class="value">dataset.summary</span>
  <span class="property">headers</span>: [<span class="string">"Name"</span>, <span class="string">"Type"</span>, <span class="string">"Count"</span>]
  <span class="property">rows</span>:
    - [<span class="string">"User"</span>, <span class="string">"entity"</span>, <span class="value">1200</span>]
    - [<span class="string">"Post"</span>, <span class="string">"text"</span>, <span class="value">5400</span>]
<span class="keyword">@end</span>

<span class="comment"># 수학 수식 예시 (LaTeX 호환)</span>
<span class="keyword">@math</span> <span class="value">formula.energy</span> <span class="keyword">@</span> <span class="property">latex</span>=<span class="string">"E = mc^2"</span> <span class="keyword">@</span>

<span class="comment"># 코드 블록 예시</span>
<span class="keyword">@code</span> <span class="value">javascript.example</span>
  <span class="property">lang</span>: <span class="string">"javascript"</span>
  <span class="property">content</span>: <span class="string">"""
    function greet() {
      console.log("Hello, Lyra!");
    }
  """</span>
<span class="keyword">@end</span>
</div>`
        }
    },
    coreSystems: [
        { id: 'astra', icon: '🛠️', title: 'Astra 메타언어', description: 'Lyra 문서의 타입, 패널, 테마 등을 정의하는 시스템' },
        { id: 'chrono', icon: '⌛', title: '시간 시스템 (Chrono 2.0)', description: '작성자와 열람자의 시간대를 모두 인식하는 정밀한 시간 제어' },
        { id: 'graph', icon: '🕸️', title: '그래프 시스템', description: '문서 간의 관계를 노드와 간선으로 시각화' },
        { id: 'semantic', icon: '💡', title: '의미 계층 및 AI 협업', description: '문서의 의도, 감정을 정의하고 AI와의 연동을 지원' },
        { id: 'versioning', icon: '🗂️', title: '버전 및 시간축 관리', description: 'Git과 같이 문서의 수정 이력과 변경 로그를 추적' },
        { id: 'rendering', icon: '🎨', title: '렌더링 및 표현', description: '다양한 포맷(HTML, PDF 등)으로 문서를 시각화' }
    ],
    devTools: [
        { id: 'ide', icon: '💻', title: 'IDE 통합 및 LSP', description: 'VSCode, JetBrains 등에서 자동 완성, 구문 하이라이팅 지원' },
        { id: 'sdk_cli', icon: '⚙️', title: 'SDK 및 CLI 도구', description: '파서 API, 빌드, 렌더링, 버전 관리를 위한 강력한 도구' },
        { id: 'performance', icon: '⚡', title: '성능 및 최적화', description: '스트리밍 파서, 병렬 처리 등으로 대규모 문서를 빠르게 처리' },
        { id: 'security', icon: '🛡️', title: '보안 정책', description: 'HTTPS 전용, CSP 활성화 등 안전한 문서 환경을 보장' },
        { id: 'studio', icon: '📊', title: 'Astra Studio', description: 'Astra 모듈과 그래프를 시각적으로 관리하는 UI 도구' },
    ],
    modalContent: {
        astra: {
            title: 'Astra 메타언어 및 정의 시스템',
            content: `
                <p class="mb-4 text-gray-600">Astra(.astra)는 Lyra 문서에서 사용하는 타입, 패널, 테마 등을 정의하는 메타 언어입니다. Lyra가 '내용'이라면 Astra는 '형식'과 '의미'를 담당하여 문서의 일관성과 재사용성을 높입니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">핵심 기능:</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>타입 정의 (@type):</b> 새로운 데이터 타입을 생성하고 유효성 검증 규칙을 추가합니다.</li>
                    <li><b>패널 정의 (@panel):</b> 재사용 가능한 UI 또는 논리적 구성요소를 정의합니다.</li>
                    <li><b>테마 정의 (@theme):</b> 문서의 색상, 폰트 등 시각적 스타일을 정의합니다.</li>
                    <li><b>상속 (@extend):</b> 기존 Astra 정의를 확장하여 새로운 정의를 만듭니다.</li>
                </ul>
                <div class="code-block">
<span class="comment"># astra/common/ui.astra 파일 예시</span>
<span class="keyword">@module</span> <span class="value">astra.common.ui</span>

  <span class="comment"># 커스텀 타입 정의</span>
  <span class="keyword">@type</span> <span class="value">ui.font.size</span>
    <span class="property">base</span>: <span class="value">number</span>
    <span class="property">constraint</span>: <span class="value">value >= 8 && value <= 72</span>
    <span class="property">default</span>: <span class="value">14</span>
  <span class="keyword">@end</span>

  <span class="comment"># 커스텀 패널 정의</span>
  <span class="keyword">@panel</span> <span class="value">card.info</span>
    <span class="property">title</span>: <span class="value">text</span>
    <span class="property">subtitle</span>: <span class="value">text</span>
  <span class="keyword">@end</span>
<span class="keyword">@end</span>
                </div>
            `
        },
        chrono: {
            title: '시간 시스템 (Chrono 2.0)',
            content: `
                <p class="mb-4 text-gray-600">Lyra의 시간 시스템은 문서의 생성, 수정, 참조 시점을 정밀하게 제어합니다. 작성자(Local Author Time)와 열람자(Viewer Local Time) 모두의 지역 시간을 인식하여, 문서 간 동기화와 시각화를 자동으로 처리합니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">시간 정책 (Time Policy):</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>author:</b> 작성자의 지역 시각을 고정하여 표시합니다.</li>
                    <li><b>viewer:</b> 열람자의 지역 시각으로 자동 변환하여 표시합니다.</li>
                    <li><b>fixed:</b> 변환 없이 고정된 절대 UTC 기준으로 표시합니다.</li>
                </ul>
                <div class="code-block">
<span class="comment"># 예시: 2031년 4월 21일 오전 9시 (서울 시간 기준)</span>
<span class="comment"># policy가 'viewer'이므로, 다른 시간대의 사용자는 자신의 시간대에 맞게 변환된 시간을 보게 됩니다.</span>
<span class="keyword">@time</span> <span class="value">schedule.opening</span>
  <span class="property">value</span>: <span class="value">2031-04-21T09:00:00Z</span>
  <span class="property">zone</span>: <span class="string">"Asia/Seoul"</span>
  <span class="property">policy</span>: <span class="value">viewer</span>
  <span class="property">format</span>: <span class="string">"YYYY-MM-DD HH:mm"</span>
<span class="keyword">@end</span>
                </div>
            `
        },
        graph: {
            title: '그래프 시스템',
            content: `
                <p class="mb-4 text-gray-600">그래프 시스템은 여러 Lyra 문서 간의 관계를 시각적으로 표현하기 위한 구조입니다. 각 문서나 개체는 노드(Node)가 되고, 이들 간의 연결은 간선(Edge)으로 정의되어 지식 네트워크를 형성합니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">관계 시각화 예시:</h4>
                <p class="mb-4 text-gray-600">아래 코드는 '서론' 문서가 '본문' 문서를 참조하는 관계를 정의합니다. 애플리케이션은 이 구조를 해석하여 시각적인 그래프로 렌더링할 수 있습니다.</p>
                <div class="flex flex-col md:flex-row gap-4 items-start">
                    <div class="code-block flex-1">
<span class="keyword">@graph</span> <span class="value">knowledge.web</span>
  <span class="keyword">@node</span> <span class="value">doc.alpha</span> <span class="keyword">@</span> <span class="property">title</span>=<span class="string">"서론"</span> <span class="keyword">@</span>
  <span class="keyword">@node</span> <span class="value">doc.beta</span> <span class="keyword">@</span> <span class="property">title</span>=<span class="string">"본문"</span> <span class="keyword">@</span>

  <span class="keyword">link</span>: <span class="value">@doc.alpha -> @doc.beta</span>
    <span class="property">label</span>: <span class="string">"references"</span>
    <span class="property">type</span>: <span class="value">semantic</span>
  <span class="keyword">@end</span>
<span class="keyword">@end</span>
                    </div>
                    <div class="flex-1 w-full h-48 relative mt-4 md:mt-0" id="graph-viz">
                        <div id="node1" class="graph-node absolute p-2 rounded-md font-semibold text-sm shadow" style="top: 20%; left: 10%;">서론</div>
                        <div id="node2" class="graph-node absolute p-2 rounded-md font-semibold text-sm shadow" style="top: 60%; left: 70%;">본문</div>
                    </div>
                </div>
            `
        },
        semantic: {
            title: '의미 계층 및 AI 협업',
            content: `
                <p class="mb-4 text-gray-600">Semantic Layer는 문서의 보이지 않는 의미적 맥락을 정의합니다. AI나 기계 해석 시스템이 문서의 의도(Intent), 감정(Emotion), 주제(Topic), 개체(Entity)를 이해하고 요약, 번역, 분석 등 자동화된 작업을 수행할 수 있게 합니다.</p>
                <div class="code-block">
<span class="comment"># 문서의 주요 개체(Entity) 정의</span>
<span class="keyword">@entity</span> <span class="value">system.alpha</span>
  <span class="property">type</span>: <span class="value">software</span>
  <span class="property">name</span>: <span class="string">"Lyra Parser"</span>
<span class="keyword">@end</span>

<span class="comment"># 문서의 의미적 속성(Semantic) 정의</span>
<span class="keyword">@semantic</span> <span class="value">report.analysis</span>
  <span class="property">intent</span>: <span class="value">evaluation</span>   <span class="comment"># 목적: 평가</span>
  <span class="property">emotion</span>: <span class="value">neutral</span>      <span class="comment"># 감정: 중립</span>
  <span class="property">topic</span>: <span class="value">software.performance</span>
  <span class="property">entity</span>: <span class="value">@system.alpha</span>
<span class="keyword">@end</span>

<span class="comment"># AI에게 작업 지시</span>
<span class="keyword">@ai</span> <span class="value">auto.summary</span>
  <span class="property">context</span>: <span class="value">@report.analysis</span>
  <span class="property">instruction</span>: <span class="string">"이 보고서를 300자 이내로 요약하라."</span>
  <span class="property">mode</span>: <span class="value">summarize</span>
  <span class="property">output</span>: <span class="value">@report.summary</span>
<span class="keyword">@end</span>
                </div>
            `
        },
        versioning: {
            title: '버전 및 시간축 관리 시스템',
            content: `
                <p class="mb-4 text-gray-600">Git과 유사하게 문서의 수정 이력, 버전 간 차이, 작성자 활동 로그를 구조적으로 추적하는 시스템입니다. 이를 통해 문서의 모든 변경 사항을 기록하고 특정 시점으로 복원할 수 있습니다.</p>
                <div class="code-block">
<span class="comment"># v1.3.2 버전 정보 기록</span>
<span class="keyword">@version</span> <span class="value">v1.3.2</span>
  <span class="property">author</span>: <span class="string">"Orion Systems"</span>
  <span class="property">timestamp</span>: <span class="value">2031-05-21T09:30:00Z</span>
  <span class="property">based_on</span>: <span class="value">@v1.3.1</span>
  <span class="property">summary</span>: <span class="string">"타임라인 기능 추가 및 Astra 호환성 개선."</span>
<span class="keyword">@end</span>

<span class="comment"># 해당 버전의 변경 사항 요약</span>
<span class="keyword">@changelog</span> <span class="value">v1.3.2</span>
  <span class="property">added</span>: [<span class="string">"chrono.timeline"</span>, <span class="string">"graph.autolink"</span>]
  <span class="property">modified</span>: [<span class="string">"ai.feedback"</span>]
<span class="keyword">@end</span>

<span class="comment"># 문서의 주요 이력을 시간순으로 시각화</span>
<span class="keyword">@timeline</span> <span class="value">project.evolution</span>
  <span class="keyword">event</span>: <span class="value">alpha</span> <span class="keyword">@</span> <span class="property">date</span>=<span class="value">2031-03-01</span> <span class="property">description</span>=<span class="string">"초기 설계 완료"</span> <span class="keyword">@</span>
  <span class="keyword">event</span>: <span class="value">beta</span> <span class="keyword">@</span> <span class="property">date</span>=<span class="value">2031-04-15</span> <span class="property">description</span>=<span class="string">"내부 테스트 시작"</span> <span class="keyword">@</span>
<span class="keyword">@end</span>
                </div>
            `
        },
        rendering: {
            title: '렌더링 및 표현 계층',
            content: `
                <p class="mb-4 text-gray-600">문서의 논리 구조를 다양한 시각적 형태로 출력하는 시스템입니다. 웹(HTML), 정적 문서(PDF), 터미널 등 여러 환경에 맞게 최적화된 결과물을 생성합니다.</p>
                 <h4 class="font-bold text-lg mb-2 mt-6">주요 기능:</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>테마 시스템:</b> Astra로 정의된 <code>@theme</code>를 기반으로 렌더링되며, 다크/라이트 모드를 자동 지원합니다.</li>
                    <li><b>인터랙션(@interact):</b> 클릭, 호버 등의 이벤트와 애니메이션을 선언적으로 정의합니다.</li>
                    <li><b>접근성:</b> WCAG 2.2 표준을 준수하여 텍스트 대비, 키보드 포커스 등을 보장합니다.</li>
                </ul>
                <div class="code-block">
<span class="comment"># 패널 클릭 시 상세 정보를 토글하는 인터랙션 정의</span>
<span class="keyword">@interact</span> <span class="value">panel.expand</span>
  <span class="property">trigger</span>: <span class="value">onClick</span>
  <span class="property">action</span>: <span class="value">toggle(@panel.detail)</span>
  <span class="property">animation</span>: <span class="value">fade-in 0.3s ease</span>
<span class="keyword">@end</span>
                </div>
            `
        },
        ide: {
            title: 'IDE 통합 및 LSP',
            content: `
                <p class="mb-4 text-gray-600">LSP(Language Server Protocol) 기반 확장을 통해 Visual Studio Code, JetBrains IDE 등 주요 편집기에서 Lyra/Astra 개발을 완벽하게 지원합니다. 이를 통해 개발자는 친숙한 환경에서 높은 생산성을 유지할 수 있습니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">지원 기능:</h4>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <li class="flex items-start"><span class="text-indigo-500 mr-3 mt-1">✓</span><div><h5 class="font-semibold">구문 하이라이팅</h5><p class="text-sm text-gray-600">코드 가독성 향상</p></div></li>
                        <li class="flex items-start"><span class="text-indigo-500 mr-3 mt-1">✓</span><div><h5 class="font-semibold">자동 완성</h5><p class="text-sm text-gray-600">빠른 코드 작성 지원</p></div></li>
                        <li class="flex items-start"><span class="text-indigo-500 mr-3 mt-1">✓</span><div><h5 class="font-semibold">실시간 오류 검출</h5><p class="text-sm text-gray-600">버그 사전 방지</p></div></li>
                        <li class="flex items-start"><span class="text-indigo-500 mr-3 mt-1">✓</span><div><h5 class="font-semibold">참조 추적</h5><p class="text-sm text-gray-600">정의와 사용처 간 빠른 이동</p></div></li>
                    </ul>
                </div>
            `
        },
        sdk_cli: {
            title: 'SDK 및 CLI 도구',
            content: `
                <p class="mb-4 text-gray-600">프로그래밍 방식으로 Lyra 문서를 다루거나 빌드 자동화를 구축할 수 있도록 SDK(Software Development Kit)와 CLI(Command-Line Interface)를 제공합니다.</p>
                <div class="code-block">
<span class="comment"># CLI 사용 예시</span>
<span class="value">$ </span><span class="property">lyra</span> build main.lyra --out dist/
<span class="comment"># main.lyra 파일을 빌드하여 dist/ 폴더에 결과물 생성</span>

<span class="value">$ </span><span class="property">lyra</span> render main.lyra --format html
<span class="comment"># main.lyra 파일을 HTML 형식으로 렌더링하여 출력</span>

<span class="value">$ </span><span class="property">lyra</span> commit -m "update semantic layer"
<span class="comment"># Git과 연동하여 문서 버전 관리</span>
                </div>
                 <h4 class="font-bold text-lg mb-2 mt-6">주요 도구:</h4>
                <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>lyra-sdk (Python/TypeScript):</b> 파서 및 AST에 직접 접근할 수 있는 API를 제공합니다.</li>
                    <li><b>astra-tools (Node.js):</b> Astra 모듈의 유효성을 검증하고 여러 모듈을 병합합니다.</li>
                    <li><b>lyra-cli:</b> 터미널에서 문법 검사, 렌더링, 빌드, 버전 관리를 수행합니다.</li>
                </ul>
            `
        },
        performance: {
            title: '성능 및 최적화',
            content: `
                 <p class="mb-4 text-gray-600">수만 라인에 달하는 대규모 문서를 빠르고 효율적으로 처리하기 위해 v2.0 파서는 성능 중심으로 재설계되었습니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">주요 개선 사항:</h4>
                 <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>스트리밍 파서 (Streaming Parser):</b> 문서를 한 번에 메모리에 올리지 않고 순차적으로 처리하여 메모리 사용량을 40% 이상 감소시킵니다.</li>
                    <li><b>병렬 구문 분석 (Parallel Parsing):</b> 멀티코어 프로세서를 활용하여 문서의 여러 부분을 동시에 분석, 전체 파싱 시간을 단축합니다.</li>
                    <li><b>지연 렌더링 (Lazy Rendering):</b> 웹 출력 시 현재 화면에 보이는 부분만 렌더링하여 초기 로딩 속도를 크게 개선합니다.</li>
                </ul>
            `
        },
        security: {
            title: '보안 정책',
             content: `
                 <p class="mb-4 text-gray-600">문서의 안정성과 신뢰성을 보장하기 위해 강력한 보안 정책을 적용합니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">핵심 보안 원칙:</h4>
                 <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>HTTPS 전용 리소스 로드:</b> 외부 이미지, 아이콘, 스크립트 등은 반드시 HTTPS 프로토콜을 통해서만 로드하여 중간자 공격을 방지합니다.</li>
                    <li><b>AI 실행 로깅:</b> <code>@ai</code> 블록이 실행될 때마다 모든 활동(컨텍스트, 지시문, 결과)을 <code>@log</code>에 필수로 기록하여 투명성과 추적 가능성을 확보합니다.</li>
                    <li><b>콘텐츠 보안 정책 (CSP):</b> 웹 렌더링 시 CSP를 기본으로 활성화하여 신뢰할 수 없는 스크립트 실행을 차단하고 XSS(Cross-Site Scripting) 공격을 방지합니다.</li>
                    <li><b>SDK 샌드박스:</b> SDK를 통한 파일 시스템 접근은 지정된 디렉토리 내에서만 허용되는 샌드박스 환경에서 수행되어 악의적인 파일 접근을 차단합니다.</li>
                </ul>
            `
        },
        studio: {
            title: 'Astra Studio',
             content: `
                 <p class="mb-4 text-gray-600">Astra Studio는 복잡한 Astra 모듈과 문서 간의 그래프 관계를 시각적으로 관리하고 편집할 수 있는 GUI 도구입니다. 코드만으로는 파악하기 어려운 전체 시스템의 구조를 한눈에 볼 수 있어 설계 및 유지보수 생산성을 크게 향상시킵니다.</p>
                <h4 class="font-bold text-lg mb-2 mt-6">주요 기능:</h4>
                 <ul class="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    <li><b>모듈 관리:</b> 여러 <code>.astra</code> 파일에 흩어져 있는 타입, 패널, 테마 정의를 시각적으로 탐색하고 편집합니다.</li>
                    <li><b>그래프 시각화:</b> 문서 간의 참조 관계(<code>@</code>)를 실시간 그래프로 시각화하여 의존성 구조를 쉽게 파악할 수 있습니다.</li>
                     <li><b>실시간 미리보기:</b> Astra 테마나 패널을 수정한 결과를 즉시 Lyra 문서에 적용하여 렌더링 결과를 확인할 수 있습니다.</li>
                </ul>
            `
        },
    }
};

let typingTimeout;

document.addEventListener('DOMContentLoaded', () => {
    const coreSystemsGrid = document.getElementById('core-systems-grid');
    const devToolsGrid = document.getElementById('dev-tools-grid');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const syntaxNav = document.getElementById('syntax-nav');
    const syntaxContentArea = document.getElementById('syntax-content-area');
    const navLinks = document.querySelectorAll('.nav-link');

    function lineByLineReveal(element, htmlString) {
        clearTimeout(typingTimeout);
        element.innerHTML = ''; // Clear previous content

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        const codeBlock = tempDiv.querySelector('.code-block');
        if (!codeBlock) return;

        const lines = codeBlock.innerHTML.split('\n').filter(line => line.trim() !== '');
        codeBlock.innerHTML = ''; // Clear the code-block
        element.appendChild(codeBlock);

        lines.forEach(lineHTML => {
            const lineEl = document.createElement('span');
            lineEl.className = 'code-line';
            lineEl.innerHTML = lineHTML;
            codeBlock.appendChild(lineEl);
        });

        let lineIndex = 0;
        const lineElements = codeBlock.querySelectorAll('.code-line');
        
        function revealLine() {
            if (lineIndex < lineElements.length) {
                lineElements[lineIndex].classList.add('is-visible');
                lineIndex++;
                typingTimeout = setTimeout(revealLine, 50); // Reveal a new line every 50ms
            }
        }
        revealLine();
    }

    const createCard = (item) => `
        <button data-modal-id="${item.id}" class="modal-trigger group bg-white p-6 rounded-lg shadow-sm text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">${item.icon}</div>
            <h3 class="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">${item.title}</h3>
            <p class="text-sm text-gray-600 mt-2">${item.description}</p>
        </button>
    `;

    contentData.coreSystems.forEach(item => coreSystemsGrid.innerHTML += createCard(item));
    contentData.devTools.forEach(item => devToolsGrid.innerHTML += createCard(item));

    const openModal = (id) => {
        const data = contentData.modalContent[id];
        if (!data) return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (document.body.scrollHeight > window.innerHeight) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        modalContent.innerHTML = `
            <div class="flex justify-between items-start">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">${data.title}</h3>
                <button id="modal-close" class="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>
            <div>${data.content}</div>
        `;
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
        document.body.style.overflow = 'hidden';

        document.getElementById('modal-close').addEventListener('click', closeModal);
        
        if (id === 'graph') {
            drawGraphLine();
        }
    };

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.add('scale-95');
        
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    document.querySelectorAll('.modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => openModal(trigger.dataset.modalId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    const updateSyntaxView = (targetId) => {
        const data = contentData.syntax[targetId];
        if (!data) return;

        syntaxContentArea.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 mb-2">${data.title}</h3>
            <p class="text-gray-600 mb-6">${data.description}</p>
            ${data.content}
        `;
        
        if (targetId === 'basic') {
            const toggle = document.getElementById('syntax-toggle');
            const exampleDiv = document.getElementById('syntax-example');
            
            const updateExample = () => {
                const newHTML = toggle.checked ? data.examples.sugar : data.examples.standard;
                lineByLineReveal(exampleDiv, newHTML);
            };
            
            toggle.addEventListener('change', updateExample);
            updateExample();
        }
    };
    
    syntaxNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const targetId = e.target.dataset.target;
            syntaxNav.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('bg-indigo-100', 'text-indigo-700');
                btn.classList.add('bg-white');
            });
            e.target.classList.add('bg-indigo-100', 'text-indigo-700');
            e.target.classList.remove('bg-white');
            updateSyntaxView(targetId);
        }
    });
    
    syntaxNav.querySelector('button').click();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-nav');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    function drawGraphLine() {
        setTimeout(() => {
            const viz = document.getElementById('graph-viz');
            const node1 = document.getElementById('node1');
            const node2 = document.getElementById('node2');

            if (!viz || !node1 || !node2) return;

            const node1HTML = node1.outerHTML;
            const node2HTML = node2.outerHTML;
            viz.innerHTML = node1HTML + node2HTML;

            const newNode1 = document.getElementById('node1');
            const newNode2 = document.getElementById('node2');

            const x1 = newNode1.offsetLeft + newNode1.offsetWidth / 2;
            const y1 = newNode1.offsetTop + newNode1.offsetHeight / 2;
            const x2 = newNode2.offsetLeft + newNode2.offsetWidth / 2;
            const y2 = newNode2.offsetTop + newNode2.offsetHeight / 2;

            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            const midX = x1 + (x2 - x1) / 2;
            const midY = y1 + (y2 - y1) / 2;

            const line = document.createElement('div');
            line.className = 'graph-edge';
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.width = `${length}px`;
            line.style.transform = `rotate(${angle}deg)`;
            
            const label = document.createElement('span');
            label.className = 'graph-edge-label';
            label.innerText = 'references →';
            label.style.left = `${midX}px`;
            label.style.top = `${midY}px`;

            viz.appendChild(line);
            viz.appendChild(label);
        }, 50);
    }
});