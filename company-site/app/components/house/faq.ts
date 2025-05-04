import { Lang } from '../../domains/house'
import { FAQ } from './types'

type FAQContent = Record<Lang, FAQ>

export const faqContent: FAQContent = {
  ja: {
    title: 'よくある質問',
    items: [
      {
        q: '契約期間について教えてください',
        a: '最短1ヶ月から契約が可能です。定期建物賃貸借契約となり、契約期間の満了により終了します。ただし、契約満了時に協議の上で再契約が可能です。契約期間満了の1ヶ月前までに、期間満了による終了の通知を行います。',
      },
      {
        q: '初期費用と退去時の費用について教えてください',
        a: 'デポジットをお預かりします。退去時には、デポジットから清掃費（デポジットの半額）を差し引き、未払いの賃料や原状回復費用がある場合はそれらも差し引いた残額を返還します。デポジットから差し引く金額の内訳は明示いたします。',
      },
      {
        q: '共益費は何に使われますか',
        a: '共益費は水道光熱費、通信費、清掃費、共有設備費、火災保険料、管理手数料など、本物件の維持管理に必要な費用に充てられます。これらの費用の増減により、共益費が改定される場合があります。',
      },
      {
        q: '入居の条件を教えてください',
        a: '身分証明書、収入証明書が必要です。外国人の方は在留カードをご提示いただき、契約開始の時点を含む1ヶ月以上の在留期間があることが条件です。また、日本語もしくは英語でのコミュニケーションが可能である必要があります。',
      },
      {
        q: '原状回復の基準について教えてください',
        a: '退去時の原状回復は、国土交通省の「原状回復をめぐるトラブルとガイドライン」に基づきます。入居者の故意・過失による損耗は入居者負担、自然劣化（経年変化）や通常使用による損耗は貸主負担となります。',
      },
      {
        q: '修繕が必要になった場合はどうすればよいですか',
        a: '修繕が必要な箇所を発見した場合は、管理者にご連絡ください。入居者の責任による修繕は入居者負担、それ以外は貸主負担となります。電球交換など軽微な修繕は、入居者自身で行うことができます。',
      },
      {
        q: '共用スペースのルールについて教えてください',
        a: '共用スペースは譲り合いの精神で使用します。個人の私物は個室内に保管し、共用部分には置かないようにします。火気使用時は、その場を離れないことが原則です。深夜（23時〜翌7時）は他の入居者の睡眠を妨げないよう特に静かに利用してください。',
      },
      {
        q: '清掃やゴミ出しはどのように行いますか',
        a: '建物内の清掃やゴミ出しは入居者の責任で行います。入居者同士で当番制などのルールを定めて、確実な実施を心がけてください。共用スペースは使用後に適切な清掃を行い、次の人が気持ちよく使えるようにしましょう。',
      },
      {
        q: '来客や宿泊について制限はありますか',
        a: '入居者以外の宿泊は原則として禁止されています。来客の際は、他の入居者に迷惑がかからないよう配慮してください。レンタルスペースエリアや他の入居者の個室への許可のない立ち入りは禁止です。',
      },
      {
        q: '節電など省エネの取り組みはありますか',
        a: '最後に部屋や建物を出るときは、照明やエアコンを必ず切ってください。サーバーの常時稼働や電動バイクの充電など、電力を大量消費する行為は禁止されています。また、許可を得ていない冷蔵庫の設置もできません。',
      },
      {
        q: 'IT環境について教えてください',
        a: '光回線によるインターネット環境が整備されており、共益費に含まれています。ただし、サーバーの常時稼働など大量の電力を消費する利用は禁止されています。勉強会などのイベント開催は、管理者への通知の上で可能です。',
      },
      {
        q: '寝室での飲食は可能ですか',
        a: '個室（寝室）での飲食や火気の使用は禁止されています。食事はキッチンやリビングなど、定められたスペースでお願いします。これは防火対策と衛生管理の観点から定められたルールです。',
      },
    ],
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'What are the contract terms?',
        a: 'Contracts are available from a minimum of 1 month. This is a fixed-term building lease agreement that ends upon expiration of the contract period. However, renewal is possible upon mutual agreement. Notice of termination due to expiration will be given 1 month before the end of the contract period.',
      },
      {
        q: 'What are the initial and move-out costs?',
        a: 'A deposit is required. Upon move-out, cleaning fees (half of the deposit) will be deducted, along with any unpaid rent or restoration costs. The remaining amount will be returned. A detailed breakdown of deductions will be provided.',
      },
      {
        q: 'What does the common service fee cover?',
        a: 'The common service fee covers utilities, internet, cleaning, shared facilities, fire insurance, management fees, and other maintenance costs. The fee may be revised based on changes in these expenses.',
      },
      {
        q: 'What are the requirements for moving in?',
        a: 'Identification and proof of income are required. Foreign residents must provide their residence card and have a period of stay that extends at least one month beyond the contract start date. They must also be able to communicate in either Japanese or English.',
      },
      {
        q: 'What are the standards for property restoration?',
        a: 'Property restoration follows the Ministry of Land, Infrastructure, Transport and Tourism guidelines. Damage caused by tenant negligence is charged to the tenant, while natural wear and tear is covered by the landlord.',
      },
      {
        q: 'What should I do if repairs are needed?',
        a: 'If you discover areas needing repair, please contact management. Repairs due to tenant responsibility will be charged to the tenant; others are covered by the landlord. Minor repairs like light bulb replacement can be done by tenants.',
      },
      {
        q: 'What are the rules for common areas?',
        a: "Common areas should be used with consideration for others. Personal belongings must be kept in private rooms, not in common areas. When using fire (cooking), you must stay present. During quiet hours (11 PM to 7 AM), please be especially mindful of noise to avoid disturbing other residents' sleep.",
      },
      {
        q: 'How is cleaning and garbage disposal handled?',
        a: 'Residents are responsible for cleaning and garbage disposal within the building. Residents should establish duty rosters or rules among themselves to ensure proper maintenance. Common areas should be cleaned after use so that the next person can use them comfortably.',
      },
      {
        q: 'Are there restrictions on visitors and overnight guests?',
        a: "Overnight stays by non-residents are generally prohibited. When having visitors, please be considerate of other residents. Unauthorized entry into rental space areas or other residents' private rooms is prohibited.",
      },
      {
        q: 'What energy-saving measures are in place?',
        a: 'Please ensure all lights and air conditioning are turned off when leaving rooms or the building last. High power consumption activities like running servers or charging electric bikes are prohibited. Installation of unauthorized refrigerators is also not allowed.',
      },
      {
        q: 'What IT facilities are available?',
        a: 'Fiber-optic internet is provided and included in the common service fee. However, high power consumption usage such as running servers is prohibited. Study sessions and events can be organized with prior notification to management.',
      },
      {
        q: 'Can I eat in the bedroom?',
        a: 'Eating and using fire in private rooms (bedrooms) is prohibited. Please use designated areas such as the kitchen or living room for meals. This rule is established for fire safety and hygiene management.',
      },
    ],
  },
}
