import { Lang } from '../../domains/house'
import { Texts, TextContent } from './types'
import { faqContent } from './faq'
import { facilitiesContent } from './facilities'

const baseContent: Record<Lang, Omit<TextContent, 'faq' | 'facilities'>> = {
  ja: {
    title: 'シェアハウスのご案内',
    livingSpace: '居住スペース',
    showPhotos: '写真を見る',
    sharedSpace: '共用スペース',
    houseName: '旗の台シェアハウス',
    houseType: '品川区旗の台 - 庭付き一戸建',
    description1:
      '品川区旗の台の駅近く、徒歩3分の立地で7LLDDKK(7室 & LDK2箇所)の広い庭付き一戸建てです',
    description2:
      '個室中心で広いお部屋が多く、シェアハウスでは珍しいルームシェアでのご利用もいただけます',
    description3:
      '住民はオーナーの影響からエンジニアが多く、ITに関わる方に人気が高くなっております',
    description4:
      '外国人起業家や、フリーランスのエンジニアなど会社員以外のお仕事をしている人も入居しており、',
    eventLink: 'オーナー主催のIT勉強会',
    description5: 'を催しております',
    selectRoom: 'ご覧になりたい部屋を間取り図からクリックしてください',
    full: '満室',
    initialCost: '初期費用',
    deposit: 'デポジット',
    monthlyFee: '賃料月額',
    rent: '賃料',
    commonFee: '共益費',
    campaign: 'キャンペーン割引',
    occupants: '入居人数',
    people: '人',
    total: '合計',
    dormitoryNote:
      'ドミトリーを継続して長期間一人でご利用の方について、個室に移動していただく場合があります',
    femaleDormitoryNote:
      '備考:女子ドミトリーには上記以外に専用キッチン・水回りが含まれます',
    availableBeds: '空きベッド数',
    currentResidents: '現在の入居者数',
  },
  en: {
    title: 'Share House Guide',
    livingSpace: 'Living Space',
    showPhotos: 'View Photos',
    sharedSpace: 'Shared Space',
    houseName: 'Hatanodai Share House',
    houseType: 'Shinagawa Hatanodai - Detached House with Garden',
    description1:
      'A spacious 7LLDDKK (7 rooms & 2 LDK) detached house with garden, just 3 minutes walk from Hatanodai Station in Shinagawa',
    description2:
      'Featuring many spacious private rooms, we uniquely offer room sharing options which is rare in share houses',
    description3:
      "Due to the owner's influence, many residents are engineers, making it popular among IT professionals",
    description4:
      'Our residents include foreign entrepreneurs and freelance engineers, and',
    eventLink: 'owner-hosted IT study sessions',
    description5: 'are held on weekends',
    selectRoom: 'Please click on a room in the floor plan to view details',
    full: 'Full',
    initialCost: 'Initial Costs',
    deposit: 'Deposit',
    monthlyFee: 'Monthly Fees',
    rent: 'Rent',
    commonFee: 'Common Fee',
    campaign: 'Campaign Discount',
    occupants: 'Occupants',
    people: 'people',
    total: 'Total',
    dormitoryNote:
      'Note: For dormitory residents staying alone for long term may be asked to move to private room',
    femaleDormitoryNote:
      'Note: Female dormitory includes exclusive kitchen and water facilities in addition to the above',
    availableBeds: 'Available Beds',
    currentResidents: 'Current Residents',
  },
}

export const texts: Texts = {
  ja: {
    ...baseContent.ja,
    faq: faqContent.ja,
    facilities: facilitiesContent.ja,
  },
  en: {
    ...baseContent.en,
    faq: faqContent.en,
    facilities: facilitiesContent.en,
  },
}
