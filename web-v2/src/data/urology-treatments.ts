import { UROLOGY_CENTERS, type UrologyCenterSpec } from "@/data/urology-centers";

export interface UrologyDiagram {
  src: string;
  caption: string;
}

export interface UrologyTreatmentSpec {
  centerSlug: string;
  slug: string;
  title: string;
  leadSummary: string;
  overviewParagraphs: string[];
  signalsHeading: string;
  signals: string[];
  protocolHeading: string;
  protocols: string[];
  clinicalNotes: string[];
  diagrams: UrologyDiagram[];
  relatedVideoIds: string[];
}

export const UROLOGY_TREATMENT_SPECS: UrologyTreatmentSpec[] = [
  // ======================== 1. 전립선 센터 (7개) ========================
  {
    centerSlug: "prostate",
    slug: "overview",
    title: "전립선 개요",
    leadSummary: "방광 아래 요도를 감싸고 있는 남성 고유 기관 전립선의 해부학적 역할과 대표 질환을 안내합니다.",
    overviewParagraphs: [
      "전립선은 방광 바로 아래에서 요도를 도넛 모양으로 감싸고 있는 약 20g 내외의 남성 부속성선입니다. 정액의 액체 성분 일부를 생성하고 정자의 운동성과 생존을 돕는 중요한 기능을 수행합니다.",
      "연령 증가나 세균 감염·골반저 근육 긴장 등이 발생하면 전립선비대증, 전립선염, 전립선암, 전립선통 등 다양한 배뇨·통증 질환으로 이어질 수 있어 정확한 감별 진단이 중요합니다.",
    ],
    signalsHeading: "전립선 정밀 검진이 권장되는 대표 신호",
    signals: [
      "소변 줄기가 가늘어지거나 배뇨 시작까지 시간이 걸림",
      "밤에 소변을 보기 위해 2회 이상 깨는 야간뇨",
      "배뇨 후에도 소변이 남아 있는 듯한 잔뇨감 및 빈뇨",
      "회음부·하복부 묵직한 불편감 또는 배뇨 시 따가움",
    ],
    protocolHeading: "단계별 전립선 정밀 진단 과정",
    protocols: [
      "문진 및 국제전립선증상점수(IPSS) 평가를 통한 증상 중증도 파악",
      "소변검사, PSA(전립선특이항원) 혈액검사 및 필요 시 PHI 정밀검사",
      "경직장 전립선 초음파(TRUS)로 전립선 용적·형태 확인 및 요속·잔뇨 측정",
    ],
    clinicalNotes: [
      "50대 이상 남성은 증상이 경미하더라도 연 1회 정기 PSA·초음파 검진을 권장합니다.",
      "전립선 질환은 증상이 유사해 비대증·염증·종양을 정확히 구분하는 것이 치료의 출발점입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0101.png", caption: "전립선의 해부학적 위치와 요도 구조 도식" },
    ],
    relatedVideoIds: ["uroj-holep-urolift", "uroj-combi-guide"],
  },
  {
    centerSlug: "prostate",
    slug: "bph",
    title: "전립선비대증",
    leadSummary: "전립선 조직이 점차 커지면서 요도를 압박해 배뇨장애를 일으키는 대표적인 중장년 남성 질환입니다.",
    overviewParagraphs: [
      "전립선비대증은 노화와 남성호르몬 변화 등의 영향으로 전립선 이행대(내선)가 커지면서 요도를 좁게 만드는 진행성 질환입니다.",
      "초기에는 약물치료로 배뇨 증상을 완화할 수 있으나, 방광 출구 폐색이 진행되거나 급성요폐·방광결석·신기능 저하 위험이 동반되면 수술적 치료를 고려하게 됩니다.",
    ],
    signalsHeading: "전립선비대증의 주요 배뇨 증상",
    signals: [
      "세뇨(소변 줄기가 약해짐) 및 단절뇨(소변이 중간에 끊김)",
      "빈뇨(하루 8회 이상) 및 절박뇨(소변을 참기 어려움)",
      "야간 빈뇨로 인한 수면의 질 저하",
      "심한 경우 소변이 전혀 나오지 않는 급성요폐 발생",
    ],
    protocolHeading: "전립선 크기와 상태에 따른 맞춤 치료",
    protocols: [
      "약물치료: 알파차단제(요도 이완) 및 5알파환원효소억제제(전립선 용적 감소) 처방",
      "최소침습 시술(유로리프트): 사정 기능 보존을 고려하는 중등도 비대증 환자 대상",
      "내시경 레이저 수술(HoLEP): 비대해진 전립선 선종을 근본적으로 적출하는 표준 수술법",
    ],
    clinicalNotes: [
      "약물 복용 중에도 잔뇨량이 늘거나 증상이 악화되면 방광 기능 저하 전 수술 시기를 검토해야 합니다.",
      "박천진·이웅희 2인 전문의 협진으로 초음파 용적 측정 후 개인별 최적 치료법을 제시합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0201.png", caption: "정상 전립선과 전립선비대증의 요도 압박 비교" },
    ],
    relatedVideoIds: ["uroj-holep-urolift", "uroj-combi-guide"],
  },
  {
    centerSlug: "prostate",
    slug: "holep",
    title: "HoLEP 수술",
    leadSummary: "홀뮴(Holmium) 레이저로 비대해진 전립선 선종을 피막에서 통째로 분리·적출하는 내시경 표준 수술입니다.",
    overviewParagraphs: [
      "HoLEP(홀뮴레이저 전립선종 적출술)은 요도를 통해 내시경을 삽입한 뒤 홀뮴 레이저로 비대해진 전립선 조직(선종)을 피막 경계면에서 정확하게 박리하여 제거하는 수술입니다.",
      "조직을 깎아내는 기존 경요도 절제술과 달리 비대 선종을 근본적으로 적출하므로 재발 가능성을 낮추고, 80g~100g 이상의 거대 전립선비대증에도 적용할 수 있습니다.",
    ],
    signalsHeading: "HoLEP 수술이 고려되는 주요 대상",
    signals: [
      "약물치료에도 배뇨 증상 개선이 충분하지 않거나 약물 부작용이 있는 경우",
      "전립선 크기가 큰 중등도~거대 전립선비대증",
      "급성요폐 반복, 방광결석 또는 반복적인 혈뇨·요로감염이 동반된 경우",
      "항혈전제 복용 등으로 출혈 위험 관리가 중요한 환자(전문의 사전 평가 필수)",
    ],
    protocolHeading: "HoLEP 수술 진행 원리 및 특징",
    protocols: [
      "1단계(적출): 홀뮴 레이저로 전립선 피막과 비대 선종 사이의 해부학적 경계를 정밀 분리",
      "2단계(지혈): 레이저 지혈 효과로 수술 중 출혈 부담을 최소화",
      "3단계(분쇄 및 배출): 방광으로 이동된 선종을 조직분쇄기(Morcellator)로 흡입 제거 후 병리조직검사 시행",
    ],
    clinicalNotes: [
      "적출된 전립선 조직 전체를 병리 검사로 확인할 수 있어 우연암 감별에 유리합니다.",
      "수술 후 일시적 배뇨 자극 증상이나 역행성 사정이 발생할 수 있으므로 사전 전문의 상담이 필수입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0302.png", caption: "HoLEP 홀뮴레이저 전립선 선종 적출 원리" },
    ],
    relatedVideoIds: ["uroj-holep-urolift"],
  },
  {
    centerSlug: "prostate",
    slug: "urolift",
    title: "유로리프트",
    leadSummary: "전립선 조직을 절제하거나 태우지 않고 특수 결찰사로 요도 공간을 넓혀주는 최소침습 시술입니다.",
    overviewParagraphs: [
      "유로리프트(UroLift, 전립선 결찰술)는 내시경을 통해 비대해진 전립선 좌우 측엽을 특수 임플란트 결찰사로 당겨 고정함으로써 좁아진 요도 통로를 확보하는 시술입니다.",
      "조직을 절제하거나 열에너지를 가하지 않아 수술 시간과 회복 부담이 비교적 적으며, 사정 기능 보존을 중요시하는 환자에게 대안으로 고려됩니다.",
    ],
    signalsHeading: "유로리프트 시술 적응증 및 고려 대상",
    signals: [
      "역행성 사정 등 성기능 변화를 최소화하면서 배뇨 증상을 개선하고자 하는 경우",
      "전립선 크기와 형태(중엽 비대 여부 등)가 결찰술 적응증에 부합하는 경우",
      "장기적인 전립선 약물 복용에 불편을 느끼는 환자",
    ],
    protocolHeading: "유로리프트 시술 및 사후 관리",
    protocols: [
      "경직장 초음파 및 방광내시경으로 전립선 크기·중엽 돌출 여부 사전 평가",
      "국소 마취 하에 요도 내시경으로 전립선 양측 조직을 결찰사(2~6개 내외)로 고정",
      "시술 후 배뇨 상태 확인 및 정기 추적 관찰",
    ],
    clinicalNotes: [
      "전립선이 지나치게 크거나 중엽 비대가 심한 경우 HoLEP 등 다른 수술법이 더 적합할 수 있습니다.",
      "시술 전 정밀 초음파·내시경 평가로 정확한 적응증 판단이 우선됩니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0701.png", caption: "유로리프트 전립선 결찰술 원리 안내" },
    ],
    relatedVideoIds: ["uroj-holep-urolift"],
  },
  {
    centerSlug: "prostate",
    slug: "prostatitis",
    title: "전립선염",
    leadSummary: "청장년층부터 중년 남성까지 흔히 발생하는 전립선 염증 및 만성 골반통증 증후군을 원인별로 치료합니다.",
    overviewParagraphs: [
      "전립선염은 세균 감염에 의한 급성·만성 세균성 전립선염과, 세균이 검출되지 않으면서 통증과 배뇨 불편이 지속되는 만성 비세균성 전립선염(만성 골반통증 증후군)으로 구분됩니다.",
      "단순 항생제 반복 복용보다 정확한 원인균·염증 여부 검사와 생활습관 교정을 병행해야 재발을 줄일 수 있습니다.",
    ],
    signalsHeading: "전립선염의 주요 증상",
    signals: [
      "회음부, 고환, 하복부, 치골 상부의 뻐근한 통증 및 불쾌감",
      "배뇨 시 작열감, 빈뇨, 잔뇨감, 소변 끝 따가움",
      "사정 시 통증 또는 사정 후 불편감 지속",
    ],
    protocolHeading: "원인 분류에 따른 맞춤 치료",
    protocols: [
      "소변검사, 전립선액/정액검사, PCR 성매개감염 검사로 세균성·비세균성 감별",
      "세균성 전립선염: 원인균에 적합한 항생제 및 소염진통제 투여",
      "비세균성/만성형: 알파차단제, 근육이완제, 좌욕·장시간 좌식 습관 교정 병행",
    ],
    clinicalNotes: [
      "과음, 과로, 장시간 앉아 있는 생활습관은 전립선 울혈을 악화시켜 재발의 원인이 됩니다.",
      "증상이 호전되더라도 처방 기간을 지켜 충분히 치료하는 것이 중요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0401.png", caption: "전립선염 유형 분류 및 증상 부위 안내" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
  {
    centerSlug: "prostate",
    slug: "cancer",
    title: "전립선암",
    leadSummary: "초기 자각 증상이 거의 없는 전립선암의 조기 발견을 위한 PSA·PHI 혈액검사와 정밀 추적 관리를 제공합니다.",
    overviewParagraphs: [
      "전립선암은 국내 남성암 중 빠르게 증가하고 있는 암종이지만, 초기에는 특별한 증상이 없거나 전립선비대증과 유사한 배뇨 증상만 나타나는 경우가 많습니다.",
      "따라서 50세 이상(가족력이 있는 경우 40대 중반 이상) 남성은 정기적인 PSA 검사와 전문의 직장수지검사·초음파 평가로 조기 발견하는 것이 매우 중요합니다.",
    ],
    signalsHeading: "조기 선별 검사가 필요한 경우",
    signals: [
      "50세 이상 남성 (연 1회 정기 PSA 혈액검사 권장)",
      "부친·형제 등 직계 가족 중 전립선암 병력이 있는 40대 이상 남성",
      "건강검진에서 PSA 수치가 기준치 이상으로 상승하거나 추세가 증가한 경우",
    ],
    protocolHeading: "정밀 선별 진단 및 상급병원 연계",
    protocols: [
      "PSA(전립선특이항원) 및 PHI(Prostate Health Index) 정밀 혈액검사로 위험도 평가",
      "직장수지검사 및 경직장 전립선 초음파 검사",
      "조직검사 또는 MRI 정밀 평가가 필요한 경우 신속한 진단 및 전문 치료 연계",
    ],
    clinicalNotes: [
      "PSA 수치 상승은 전립선비대증이나 전립선염에서도 나타날 수 있으므로 전문의 감별이 필요합니다.",
      "PHI 검사를 통해 불필요한 침습적 조직검사를 줄이고 정밀도를 높일 수 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0101.png", caption: "전립선 구조 및 정기 선별 검사 안내" },
    ],
    relatedVideoIds: ["uroj-holep-urolift", "uroj-combi-guide"],
  },
  {
    centerSlug: "prostate",
    slug: "prostatodynia",
    title: "전립선통",
    leadSummary: "염증 소견 없이 골반저 근육 긴장과 신경 과민으로 발생하는 만성 골반·회음부 통증을 체계적으로 관리합니다.",
    overviewParagraphs: [
      "전립선통은 검사상 뚜렷한 세균이나 백혈구 증가(염증)가 관찰되지 않음에도 전립선염과 유사한 회음부 통증, 하복부 불쾌감, 배뇨 불편이 나타나는 상태입니다.",
      "골반저 근육의 만성적인 긴장, 스트레스, 장시간 운전·좌식 생활 등이 복합적으로 작용하므로 다각적인 접근이 필요합니다.",
    ],
    signalsHeading: "전립선통의 특징적 증상",
    signals: [
      "소변·전립선액 검사상 염증 소견이 없으나 회음부·고환 통증 지속",
      "스트레스나 피로 누적 시 통증 및 배뇨 불편감 악화",
      "장시간 앉아 있을 때 뻐근함이 심해지고 온수 좌욕 시 일시 완화",
    ],
    protocolHeading: "전립선통 맞춤 관리 전략",
    protocols: [
      "감염성 전립선염 및 방광·요도 질환을 배제하는 정밀 감별 검사",
      "배뇨근·골반 근육 이완 약물치료 및 신경성 통증 조절",
      "온수 좌욕, 규칙적 유산소 운동, 카페인·알코올 절제 등 생활요법 지도",
    ],
    clinicalNotes: [
      "불필요한 장기 항생제 투여를 피하고, 통증의 실제 원인에 맞춘 보존적·약물 치료가 핵심입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_02_contxt_0401.png", caption: "골반·전립선 통증 감별 및 관리 안내" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },

  // ======================== 2. 요로결석 센터 (3개) ========================
  {
    centerSlug: "stone",
    slug: "symptoms",
    title: "요로결석 원인 · 증상",
    leadSummary: "신장·요관·방광 등 요로계에 생성된 결석의 주요 발생 원인과 응급 주의 증상을 안내합니다.",
    overviewParagraphs: [
      "요로결석은 소변 내 칼슘, 수산, 요산 등의 성분이 과포화되어 결정으로 뭉쳐 돌처럼 굳어지는 질환입니다. 수분 섭취 부족, 땀 배출이 많은 계절, 식습관 및 대사 요인이 주요 원인으로 작용합니다.",
      "결석이 요관으로 내려와 소변 흐름을 막으면 신우 내 압력이 급격히 상승하면서 극심한 옆구리 통증을 유발합니다.",
    ],
    signalsHeading: "요로결석의 대표 증상",
    signals: [
      "갑자기 시작되어 수십 분~수 시간 지속되는 극심한 옆구리·등 통증",
      "통증이 하복부, 서혜부, 고환 부위로 뻗어나가는 방사통",
      "육안적 또는 현미경적 혈뇨, 빈뇨·잔뇨감, 구역·구토 동반",
      "발열·오한이 동반될 경우 급성 신우신염 위험으로 즉각적인 진료 필요",
    ],
    protocolHeading: "내원 전 확인 및 초기 대처",
    protocols: [
      "통증이 의심될 경우 무리한 민간요법 대신 신속히 비뇨의학과 진찰 권장",
      "발열·오한 동반 시 요로감염 합병증 여부를 최우선으로 확인",
      "재발률이 높은 질환이므로 결석 제거 후 수분 섭취 및 식이 예방 관리 필수",
    ],
    clinicalNotes: [
      "요로결석은 5년 내 재발률이 높아 치료 후에도 하루 2L 이상 충분한 수분 섭취가 중요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_08_contxt_0101.png", caption: "요로계(신장·요관·방광) 결석 위치 및 통증 경로" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
  {
    centerSlug: "stone",
    slug: "diagnosis",
    title: "요로결석 진단",
    leadSummary: "소변검사, 단순요로촬영(KUB), 초음파 및 정밀 영상 검사로 결석의 크기·위치·폐색 정도를 정확히 확인합니다.",
    overviewParagraphs: [
      "요로결석은 결석의 크기(mm), 위치(상부·중부·하부 요관 또는 신장), 단단함, 수신증(신장 부종) 유무에 따라 자연 배출 대기인지 쇄석·내시경 치료인지가 달라집니다.",
      "따라서 정확한 초기 영상 진단이 불필요한 시술을 줄이고 통증을 빠르게 해결하는 핵심입니다.",
    ],
    signalsHeading: "주요 진단 검사 항목",
    signals: [
      "소변검사: 현미경적 혈뇨 및 요로감염(백혈구·세균) 동반 여부 확인",
      "단순요로촬영(KUB): 방사선 비투과성 결석의 위치와 크기 파악",
      "신장·방광 초음파: 방사선 노출 없이 수신증 여부 및 결석 확인",
      "필요 시 저선량 비조영 CT 등 정밀 영상 검사 연계",
    ],
    protocolHeading: "진단 결과에 따른 치료 방향 결정",
    protocols: [
      "4mm 이하 하부 요관 결석(합병증 없음): 대기요법 및 배출 보조 약물 고려",
      "5mm 이상 또는 통증·수신증 지속 시: 체외충격파쇄석술 또는 내시경 결석 제거술 검토",
      "신장 기능 저하·감염 동반 시: 즉각적인 요로 감압 및 전문 치료 시행",
    ],
    clinicalNotes: [
      "요산석 등 일부 결석은 일반 X-ray에서 잘 보이지 않을 수 있어 초음파·정밀 진단이 중요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_08_contxt_0301.png", caption: "요로결석 진단 및 위치별 평가 기준" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
  {
    centerSlug: "stone",
    slug: "treatment",
    title: "요로결석 치료",
    leadSummary: "결석의 크기와 위치에 따라 대기요법, 체외충격파쇄석술(ESWL), 요관내시경 결석 제거술을 맞춤 적용합니다.",
    overviewParagraphs: [
      "요로결석 치료의 목표는 통증을 신속히 해소하고 신장 기능을 보호하면서 결석을 안전하게 제거하는 것입니다.",
      "결석의 위치와 경도, 환자의 전신 상태를 종합해 비침습적 쇄석술과 내시경 레이저 파쇄술 중 가장 적합한 방법을 선택합니다.",
    ],
    signalsHeading: "주요 치료 방법 비교",
    signals: [
      "대기·약물요법: 크기가 작고 합병증이 없는 결석의 자연 배출 유도",
      "체외충격파쇄석술(ESWL): 체외에서 충격파를 집중해 결석을 미세하게 분쇄 후 자연 배출",
      "요관내시경 결석 제거술(URS): 요도로 가느다란 내시경을 삽입해 홀뮴 레이저로 직접 파쇄·제거",
    ],
    protocolHeading: "치료 후 관리 및 재발 예방",
    protocols: [
      "시술 후 잔석 배출 여부를 추적 X-ray 또는 초음파로 확인",
      "하루 2L 이상 충분한 수분 섭취와 과도한 나트륨·수산 섭취 절제",
      "결석 재발 이력이 있는 경우 정기 추적 검진 권장",
    ],
    clinicalNotes: [
      "단단하거나 크기가 큰 결석은 체외충격파보다 내시경 레이저 직접 제거가 더 효율적일 수 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_08_contxt_0305.png", caption: "체외충격파 및 내시경 요로결석 치료 원리" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },

  // ======================== 3. 성기능 · 보형물 센터 (5개) ========================
  {
    centerSlug: "sexual-implant",
    slug: "penile-implant",
    title: "음경임플란트",
    leadSummary: "약물이나 주사 치료에 반응하지 않는 기질성 발기부전의 근본적 해결을 돕는 음경보형물 삽입수술입니다.",
    overviewParagraphs: [
      "음경임플란트(음경보형물 삽입술)는 당뇨 합병증, 전립선암 수술 후 신경 손상, 중증 혈관성 발기부전 등으로 경구약이나 주사요법에 효과가 없는 경우 시행하는 검증된 수술적 치료입니다.",
      "굴곡형 보형물과 세조각 팽창형 보형물(AMS 등) 중 환자의 연령, 손동작 편의성, 해부학적 조건을 고려해 맞춤 선택하며, 3S 원칙 하에 안전하게 집도합니다.",
    ],
    signalsHeading: "음경임플란트가 고려되는 주요 대상",
    signals: [
      "경구용 발기부전 치료제·주사요법에 반응이 없거나 부작용으로 중단한 경우",
      "전립선암·직장암 수술, 골반 외상, 척수 손상 후 발생한 기질성 발기부전",
      "당뇨·심혈관 질환 등으로 해면체 혈관 기능이 크게 저하된 경우",
      "중증 페이로니병(음경만곡증)과 발기부전이 동반된 경우",
    ],
    protocolHeading: "보형물 유형 및 수술 원칙",
    protocols: [
      "굴곡형 보형물: 구조가 단순해 조작이 쉽고 고령·손동작이 불편한 환자에게 적합",
      "세조각 팽창형 보형물: 음낭 내 펌프 조작으로 자연스러운 이완·발기 상태 구현",
      "수술 전 감염 예방 프로토콜 및 국소 신경 마취·실시간 모니터링 하에 안전 집도",
    ],
    clinicalNotes: [
      "귀두 감각신경과 사정 경로를 보존하여 수술 후에도 감각과 사정 기능을 유지합니다.",
      "드물게 감염·기계적 이상·통증 등이 발생할 수 있어 숙련된 전문의의 철저한 감염 관리가 핵심입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_04_contxt_0401.png", caption: "음경보형물(굴곡형·팽창형) 구조 및 원리 안내" },
    ],
    relatedVideoIds: ["uroj-penile-implant", "uroj-combi-guide"],
  },
  {
    centerSlug: "sexual-implant",
    slug: "ed",
    title: "발기부전",
    leadSummary: "혈관·신경·호르몬·심인성 요인을 정밀하게 감별하여 근본 원인에 맞는 단계별 발기부전 치료를 제공합니다.",
    overviewParagraphs: [
      "발기부전은 만족스러운 성생활을 유지할 만큼 충분한 발기가 이루어지지 않거나 유지되지 않는 상태가 3개월 이상 지속되는 질환입니다.",
      "단순한 노화 현상이 아니라 고혈압, 당뇨, 이상지질혈증 등 혈관 건강의 조기 신호일 수 있으므로 정확한 원인 평가가 중요합니다.",
    ],
    signalsHeading: "발기부전의 주요 원인 분류",
    signals: [
      "혈관성 요인: 동맥경화, 당뇨, 고혈압, 흡연으로 인한 음경 혈류 유입 저하",
      "신경성 요인: 골반 수술, 당뇨병성 신경병증, 척수 질환",
      "내분비성 요인: 남성호르몬(테스토스테론) 저하 및 남성갱년기",
      "심인성 요인: 스트레스, 불안, 우울감 및 수행 불안",
    ],
    protocolHeading: "원인별 단계적 접근",
    protocols: [
      "정밀 문진, 혈액검사(남성호르몬·대사지표) 및 음경혈관 도플러검사",
      "1차 치료: 생활습관 교정, 경구용 PDE5 억제제, 호르몬 보충요법",
      "2·3차 치료: 자가주사요법(트리믹스) 및 반응 없을 시 음경임플란트 상담",
    ],
    clinicalNotes: [
      "임의로 비인가 약물을 복용하면 심혈관 부작용 위험이 있으므로 반드시 전문의 처방을 받아야 합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_04_contxt_0102.png", caption: "발기 기전과 혈관·신경성 원인 도식" },
    ],
    relatedVideoIds: ["uroj-penile-implant", "uroj-combi-guide"],
  },
  {
    centerSlug: "sexual-implant",
    slug: "ed-test",
    title: "성기능검사",
    leadSummary: "음경혈관 도플러 초음파, 진동각검사, 남성호르몬 혈액검사로 발기부전과 조루의 객관적 원인을 진단합니다.",
    overviewParagraphs: [
      "성기능장애는 환자의 주관적 증상만으로는 심인성인지 기질성(혈관·신경·호르몬)인지 구분하기 어렵습니다.",
      "객관적인 기능 검사를 통해 동맥 혈류 속도, 정맥 누출 여부, 말초 감각 역치 및 호르몬 수치를 정량적으로 확인합니다.",
    ],
    signalsHeading: "강남J비뇨기과 정밀 성기능검사 항목",
    signals: [
      "음경혈관 도플러 초음파: 혈관확장제 투여 후 동맥 유입 속도 및 정맥 폐쇄 기능 평가",
      "남성호르몬 종합혈액검사: 테스토스테론, 혈당, 지질 등 대사·내분비 상태 평가",
      "음경 진동각검사: 귀두 및 음경 체부 신경의 민감도 정량 측정",
      "야간 수면 발기 및 심인성·기질성 감별 평가",
    ],
    protocolHeading: "검사 진행 및 결과 상담",
    protocols: [
      "5개 독립 개인진료실과 전담 남성 간호팀 배정으로 프라이버시 보장",
      "검사 당일 또는 결과 판독 후 2인 전문의가 맞춤 치료 계획 수립",
    ],
    clinicalNotes: [
      "정확한 원인 검사가 선행되어야 불필요한 시술이나 반복적인 약물 실패를 줄일 수 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_04_contxt_0201.png", caption: "음경혈관 도플러 및 신경 감각 검사 안내" },
    ],
    relatedVideoIds: ["uroj-penile-implant", "uroj-combi-guide"],
  },
  {
    centerSlug: "sexual-implant",
    slug: "ed-treatment",
    title: "발기부전 치료",
    leadSummary: "경구 약물치료, 남성호르몬 요법, 자가주사요법, 음경보형물 수술까지 단계별 맞춤 치료를 제공합니다.",
    overviewParagraphs: [
      "발기부전 치료는 가장 비침습적이고 안전한 방법부터 단계적으로 적용하는 것이 국제 비뇨의학 표준 원칙입니다.",
      "환자의 기저질환(심장질환·당뇨·고혈압)과 복용 중인 약물(질산염 제제 등)을 면밀히 확인해 안전하게 처방합니다.",
    ],
    signalsHeading: "단계별 발기부전 치료 옵션",
    signals: [
      "1단계(약물·호르몬): 경구용 발기부전 치료제 맞춤 처방 및 남성호르몬 저하 시 보충요법",
      "2단계(국소 주사): 경구약 반응이 부족하거나 복용이 어려운 경우 해면체 자가주사요법 교육",
      "3단계(수술적 치료): 비수술 치료에 반응하지 않는 기질성 발기부전 시 음경임플란트 삽입술",
    ],
    protocolHeading: "안전한 치료를 위한 전문의 관리",
    protocols: [
      "질산염 제제 복용 여부 등 심혈관계 금기 사항 사전 확인",
      "자가주사요법 시 지속발기증 예방을 위한 개인별 적정 용량 테스트 필수",
      "치료 반응 추적 관찰을 통한 용량·방법 최적화",
    ],
    clinicalNotes: [
      "전립선비대증과 발기부전이 동반된 경우 통합적인 약물·수술 전략을 함께 설계할 수 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_04_contxt_0301.jpg", caption: "발기부전 단계별 치료 프로세스" },
    ],
    relatedVideoIds: ["uroj-penile-implant", "uroj-combi-guide"],
  },
  {
    centerSlug: "sexual-implant",
    slug: "pe",
    title: "조루증 (개요 · 진단 · 치료)",
    leadSummary: "사정 조절이 어려워 스트레스를 유발하는 조루증의 원인을 과민성·심인성·질환성으로 감별해 치료합니다.",
    overviewParagraphs: [
      "조루증은 질 내 삽입 전 또는 삽입 직후 본인의 의지와 무관하게 사정이 이루어져 개인적 고통이나 파트너와의 갈등을 초래하는 흔한 성기능장애입니다.",
      "단순히 귀두가 민감해서 발생하는 과민성 외에도 전립선염, 발기부전 동반, 세로토닌 신경전달 불균형 등 다양한 원인이 존재합니다.",
    ],
    signalsHeading: "조루증 원인 감별 및 진단",
    signals: [
      "음경 진동각검사: 귀두·음경 피부의 과민성 여부 객관적 측정",
      "전립선·요도 염증 검사: 만성 전립선염에 의한 이차성 조루 감별",
      "발기력 동반 평가: 발기 유지력 저하로 인한 조기 사정 여부 확인",
    ],
    protocolHeading: "원인별 맞춤 조루증 치료",
    protocols: [
      "약물치료: 중추 신경 사정 조절 경구약 및 국소 마취 도포제 처방",
      "동반 질환 치료: 전립선염·발기부전이 원인인 경우 선행 질환 치료 병행",
      "수술적 치료: 과민성이 뚜렷하고 비수술 치료에 반응이 제한적인 경우 신중한 상담 후 배부신경차단술 등 검토",
    ],
    clinicalNotes: [
      "모든 조루증에 수술이 필요한 것은 아니며, 진동각검사와 전문의 상담을 통해 비수술 치료를 우선 고려합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_06_contxt_0301.png", caption: "조루증 원인 분류 및 치료 가이드" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },

  // ======================== 4. 음경재건 · 확대 센터 (6개) ========================
  {
    centerSlug: "reconstruction",
    slug: "peyronie",
    title: "음경만곡증",
    leadSummary: "선천적 휘어짐과 후천적 페이로니병(백막 섬유화)을 각도와 변형 형태에 따라 주름법 또는 기하학적 백막이식으로 교정합니다.",
    overviewParagraphs: [
      "음경만곡증은 발기 시 음경이 상하좌우로 비정상적으로 휘어져 성관계 시 통증이나 삽입 곤란을 유발하는 질환입니다.",
      "선천적인 해면체 불균형에 의한 경우와, 미세 손상 후 백막에 단단한 섬유화 결절(플라크)이 생기는 후천적 페이로니병으로 나뉩니다.",
    ],
    signalsHeading: "교정 수술이 고려되는 경우",
    signals: [
      "발기 시 휘어진 각도가 심해 성관계 시 본인 또는 파트너에게 통증이 발생하는 경우",
      "페이로니병의 급성 통증기가 지나고 변형이 6개월 이상 안정화된 상태",
      "음경이 잘록해지는 모래시계 변형이나 길이 단축이 동반된 경우",
    ],
    protocolHeading: "변형 정도에 따른 수술적 교정법",
    protocols: [
      "백막 주름법(Plication): 경도~중등도 만곡에서 반대측 백막을 봉합해 각도 교정",
      "기하학적 백막이식수술(Geometric Grafting): 심한 만곡·복합 변형에서 섬유화 부위를 절개하고 이식편으로 길이 손실을 최소화하며 교정",
      "중증 발기부전이 동반된 경우 음경보형물 삽입과 만곡 교정을 함께 검토",
    ],
    clinicalNotes: [
      "수술 전 발기 상태의 정확한 각도 측정과 발기력 평가가 수술법 선택의 기준이 됩니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0501.png", caption: "음경만곡증 유형 및 교정 수술 원리" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },
  {
    centerSlug: "reconstruction",
    slug: "foreign-body",
    title: "음경이물질제거",
    leadSummary: "바세린·파라핀·불법 필러 등 비의료 이물질로 인한 염증·피부 괴사를 안전하게 제거하고 결손 피부를 재건합니다.",
    overviewParagraphs: [
      "과거 비의료인에 의해 주입된 바세린, 파라핀, 액체 실리콘 또는 과도한 필러 등은 시간이 지나면서 주변 조직으로 침윤해 만성 염증, 딱딱한 경화, 피부 궤양 및 괴사를 유발할 수 있습니다.",
      "이물질을 남김없이 제거하는 것 못지않게, 제거 후 부족해진 음경 피부를 안전하게 덮어주는 피부 재건 술식이 중요합니다.",
    ],
    signalsHeading: "이물질 제거가 시급한 신호",
    signals: [
      "이물질 주입 부위가 딱딱하게 굳어지거나 모양이 울퉁불퉁하게 변형됨",
      "반복적인 피부 붉어짐, 진물, 통증, 궤양 또는 감염 증상 발생",
      "이물질이 음낭이나 치골 부위로 이동해 배뇨·성생활 불편 초래",
    ],
    protocolHeading: "침윤 범위에 따른 제거 및 피부 재건",
    protocols: [
      "단순 제거 및 일차 봉합: 이물질이 국소 부위에 한정되고 피부 여유가 충분한 경우",
      "음낭터널피판술 및 피부 재건술: 광범위한 침윤으로 피부 결손이 예상되는 경우 혈류가 풍부한 음낭 피부로 안전하게 재건",
    ],
    clinicalNotes: [
      "염증과 피부 괴사가 진행되기 전에 조기에 제거할수록 정상 피부를 더 많이 보존할 수 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0401.png", caption: "음경 이물질 제거 및 피부 재건 개념도" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },
  {
    centerSlug: "reconstruction",
    slug: "glans",
    title: "귀두확대술",
    leadSummary: "해부학적 구조를 고려해 귀두 테두리 및 직하 공간에 안전한 의료용 재료를 적용하는 시술입니다.",
    overviewParagraphs: [
      "귀두는 해면체 조직이 치밀하고 혈관·신경이 풍부해 무리한 주입이나 과도한 박리를 피해야 하는 민감한 부위입니다.",
      "정확한 해부학적 층을 파악해 개인의 체형과 조화를 이루는 범위 내에서 안전하게 시술을 계획합니다.",
    ],
    signalsHeading: "사전 상담 및 고려 사항",
    signals: [
      "음경 체부 대비 귀두 볼륨의 균형 개선을 원하는 경우",
      "기존 시술 후 부자연스러운 경계 개선이 필요한 경우",
    ],
    protocolHeading: "주요 시술 방법",
    protocols: [
      "의료용 히알루론산 필러 주입: 절개 없이 비교적 간편하게 진행(시간 경과에 따라 점진 흡수)",
      "귀두직하 확대수술(진피 등): 해부학적 경계층에 맞춘 맞춤형 보강",
    ],
    clinicalNotes: [
      "혈관 압박이나 염증 예방을 위해 검증된 의료용 재료와 적정 용량 준수가 필수입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0101.png", caption: "귀두 해부학적 구조 및 확대 원리" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },
  {
    centerSlug: "reconstruction",
    slug: "girth",
    title: "음경굵기확대술",
    leadSummary: "국산·수입 동종진피 또는 의료용 필러를 활용해 개인별 피부 탄력에 맞춘 굵기 확대술을 시행합니다.",
    overviewParagraphs: [
      "음경굵기확대술은 음경 피부 아래 근막층에 생체 적합성이 검증된 대체진피(동종진피)를 이식하거나 의료용 필러를 주입해 둘레를 보강하는 수술입니다.",
      "피부 두께와 여유, 포경 수술 이력, 기대하는 자연스러움에 따라 적합한 재료와 절개 방식을 선택합니다.",
    ],
    signalsHeading: "재료별 특징 비교",
    signals: [
      "동종진피(국산/수입): 생착 과정을 거쳐 자연스러운 촉감과 지속력을 기대하는 수술적 방법",
      "히알루론산 필러: 비절개 방식으로 회복 부담이 적으나 일정 기간 후 흡수 가능",
    ],
    protocolHeading: "안전한 수술 및 회복 관리",
    protocols: [
      "국소 신경 마취 및 최소 절개로 출혈·부종 부담 완화",
      "수술 후 감염 예방 드레싱 및 일정 기간 금주·성관계 제한 준수",
    ],
    clinicalNotes: [
      "과도한 재료 삽입은 피부 괴사나 감각 저하를 유발할 수 있어 해부학적 한계 내 맞춤 설계가 중요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0201.png", caption: "음경 근막층 구조 및 굵기 확대 원리" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },
  {
    centerSlug: "reconstruction",
    slug: "length",
    title: "음경길이연장술",
    leadSummary: "치골 부위 지방 과다, 인대 구조, 음낭 물갈퀴 등 숨어 있는 길이를 저해하는 원인을 찾아 교정합니다.",
    overviewParagraphs: [
      "음경길이연장술은 체외로 드러나지 않고 체내에 묻혀 있는 음경 길이를 해부학적 원인에 따라 교정해 평상시 및 외관상 길이를 개선하는 수술입니다.",
      "원인이 치골부 지방층인지, 음낭 갈퀴 피부(물갈퀴음경)인지에 따라 접근 방식이 달라집니다.",
    ],
    signalsHeading: "원인별 교정 대상",
    signals: [
      "하복부·치골 지방이 두꺼워 음경이 파묻혀 보이는 경우",
      "음낭 피부가 음경 앞쪽까지 높게 붙어 있는 물갈퀴음경",
      "이전 수술 후 피부 유착이나 당김으로 길이가 짧아 보이는 경우",
    ],
    protocolHeading: "원인 맞춤형 교정 술식",
    protocols: [
      "치골부 지방 제거술: 음경을 덮고 있는 치골 상부 지방층 정리",
      "물갈퀴음경 교정술: 음낭과 음경 경계 피부를 정교하게 재디자인",
      "필요 시 근막 고정술을 병행해 재함몰 예방",
    ],
    clinicalNotes: [
      "발기 시 해면체 자체의 길이를 무리하게 늘리는 수술이 아니므로 기대 효과와 한계를 사전에 충분히 설명드립니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0301.png", caption: "음경길이연장술 해부학적 교정 원리" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },
  {
    centerSlug: "reconstruction",
    slug: "buried-penis",
    title: "함몰음경",
    leadSummary: "음경이 치골 지방층과 피부 안쪽으로 말려 들어가는 함몰음경을 외부근막고정술·치골지방제거술로 교정합니다.",
    overviewParagraphs: [
      "함몰음경은 음경 해면체 자체의 발육은 정상이지만, 음경 피부와 근막의 고정력이 약하거나 치골부 지방이 두꺼워 평상시 음경이 안쪽으로 끌려 들어가는 상태입니다.",
      "위생 관리의 어려움, 반복적인 피부염, 배뇨 시 소변 튐 등의 기능적 불편을 동반할 수 있습니다.",
    ],
    signalsHeading: "함몰음경의 주요 원인 및 불편",
    signals: [
      "복부·치골부 지방 축적으로 음경이 피부 아래로 파묻힘",
      "선천적 근막 부착 이상 또는 과도한 포경수술 후 피부 부족",
      "습진·악취 등 위생 문제 및 배뇨 불편감",
    ],
    protocolHeading: "함몰음경 교정 수술",
    protocols: [
      "외부근막고정술: 음경 기저부 근막을 안정적으로 고정해 함몰 방지",
      "치골지방제거술: 과도한 치골 지방층 제거 병행",
      "피부 부족이 동반된 경우 피판술 등 피부 재건 고려",
    ],
    clinicalNotes: [
      "단순 포경수술을 시행하면 오히려 피부가 부족해져 함몰이 악화될 수 있으므로 전문의 감별이 필수입니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_03_contxt_0601.png", caption: "함몰음경 구조 및 교정 술식 안내" },
    ],
    relatedVideoIds: ["uroj-reconstruction-qna"],
  },

  // ======================== 5. 정관 · 포경 센터 (3개) ========================
  {
    centerSlug: "vasectomy-circumcision",
    slug: "vasectomy",
    title: "정관수술 · 무도정관수술",
    leadSummary: "메스 절개 없이 미세 천자 기구로 정관을 차단해 흉터와 회복 부담을 줄인 무도정관수술입니다.",
    overviewParagraphs: [
      "정관수술은 정자가 이동하는 통로인 양측 정관을 차단·결찰하는 영구적 남성 피임법입니다. 고환의 남성호르몬 생성 기능이나 사정액의 대부분을 차지하는 전립선·정낭 분비에는 영향을 주지 않습니다.",
      "무도정관수술은 메스 대신 전용 미세 기구로 음낭 피부에 작은 구멍을 내어 시행하므로 봉합과 흉터 부담이 적습니다.",
    ],
    signalsHeading: "수술 전 반드시 확인할 사항",
    signals: [
      "향후 자녀 계획이 완전히 종료되었는지 배우자와 충분한 합의 필요",
      "수술 직후에는 정낭에 잔여 정자가 남아 있어 즉각 피임되지 않음",
      "수술 후 약 15~20회 사정 또는 2~3개월 뒤 정액검사로 무정자 확인 필수",
    ],
    protocolHeading: "무도정관수술 진행 및 사후 확인",
    protocols: [
      "국소 마취 후 음낭 중앙 미세 천자를 통해 양측 정관 분리·차단 및 이중 안전 처리",
      "수술 시간 약 15~20분 내외, 당일 일상 복귀 가능(격한 운동은 1주일 제한)",
      "추적 정액검사에서 무정자 판정을 받은 이후부터 피임 효과 적용",
    ],
    clinicalNotes: [
      "극히 드물게 정관 자연 재개통이 보고될 수 있어 수술 후 정액검사 확인이 매우 중요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_05_contxt_0201.png", caption: "무도정관수술 미세 천자 및 차단 원리" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
  {
    centerSlug: "vasectomy-circumcision",
    slug: "reversal",
    title: "미세정관복원수술",
    leadSummary: "수술 현미경을 이용해 머리카락보다 가는 봉합사로 절단된 정관을 정밀 문합하는 미세수술입니다.",
    overviewParagraphs: [
      "미세정관복원수술은 과거 정관수술 후 자녀 계획이 변경되었을 때 차단되었던 정관의 양 끝을 수술 현미경 하에서 다시 연결하는 고난도 미세수술입니다.",
      "정관 내경은 약 0.3~0.5mm로 매우 가늘기 때문에 육안 수술이 아닌 현미경 기반의 정밀 다층 문합술이 개통률에 중요한 영향을 미칩니다.",
    ],
    signalsHeading: "복원수술 전 고려 요소",
    signals: [
      "정관수술 후 경과 기간(기간이 짧을수록 개통 및 임신에 유리)",
      "수술 중 정관액 내 정자 존재 여부 확인(필요 시 부고환-정관 문합 고려)",
      "배우자의 가임력 상태 함께 점검 권장",
    ],
    protocolHeading: "현미경 미세 문합술 진행 과정",
    protocols: [
      "기존 결찰 부위 흉터 조직 제거 및 정관 개통 상태 확인",
      "고배율 수술 현미경으로 정관 내막과 근층을 정밀 봉합",
      "수술 후 정기 정액검사를 통한 정자 회복 및 운동성 추적 확인",
    ],
    clinicalNotes: [
      "수술 후 정액검사에서 정자가 확인되기까지 수개월이 소요될 수 있으며, 개인별 복원 결과에는 차이가 있습니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_05_contxt_0301.png", caption: "현미경 미세정관복원 문합 원리" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
  {
    centerSlug: "vasectomy-circumcision",
    slug: "circumcision",
    title: "레이저포경수술",
    leadSummary: "음경 피부 여유와 발기 시 길이를 정밀 측정한 뒤 여분의 표피만 얇게 박리하는 디자인 포경수술입니다.",
    overviewParagraphs: [
      "레이저포경수술(소매법 디자인 포경)은 여분의 음경 포피를 무작정 절제하지 않고, 평상시와 발기 시 피부 길이를 정확히 계측한 뒤 피부 아래 피하조직을 최대한 보존하면서 겉표피만 정교하게 제거하는 방식입니다.",
      "진성 포경, 반복적인 귀두포피염, 위생 관리의 어려움이 있는 경우 의학적 필요성을 평가해 시행합니다.",
    ],
    signalsHeading: "포경수술이 권장되는 의학적 적응증",
    signals: [
      "포피 입구가 좁아 귀두가 전혀 노출되지 않는 진성 포경",
      "포피가 뒤로 젖혀진 뒤 돌아오지 않는 감돈 포경 이력",
      "반복적인 귀두포피염, 요로감염 또는 심한 위생 불편",
    ],
    protocolHeading: "디자인 레이저포경수술 특징",
    protocols: [
      "정밀 디자인 계측으로 발기 시 피부 당김 예방",
      "레이저를 이용한 정교한 절개 및 출혈 최소화",
      "귀두포피유착이나 포피소대 단축이 동반된 경우 맞춤 박리·성형 병행",
    ],
    clinicalNotes: [
      "함몰음경이 동반된 경우에는 일반 포경수술이 금기일 수 있으므로 반드시 전문의 사전 진찰이 필요합니다.",
    ],
    diagrams: [
      { src: "/assets/medical/pc_clinic_07_contxt_0101_bg.jpg", caption: "소매법 디자인 레이저포경수술 안내" },
    ],
    relatedVideoIds: ["uroj-combi-guide"],
  },
];

export function findUrologyCenter(centerSlug: string): UrologyCenterSpec | undefined {
  return UROLOGY_CENTERS.find((c) => c.slug === centerSlug);
}

export function findUrologyTreatment(
  centerSlug: string,
  slug: string
): UrologyTreatmentSpec | undefined {
  return UROLOGY_TREATMENT_SPECS.find(
    (item) => item.centerSlug === centerSlug && item.slug === slug
  );
}
