export type ContentSection = {
  title: string
  description: string
}

export type ExampleEvent = {
  title: string
  description: string
  image: string
}

export type Space = {
  name: string
  description: string
  images: string[]
}

export type Condition = {
  title: string
  description: string
}

export const texts = {
  ja: {
    title: 'イベントスペース無償提供キャンペーン',
    description:
      '旗の台シェアハウス（東急池上線・大井町線 旗の台駅徒歩5分）では、2025年10月までの期間限定で、コミュニティの活性化を目的としたイベントスペースの無償提供を実施しています。シェアハウス事業の紹介を含むイベントであれば、どなたでもご利用いただけます。',
    spaces: {
      title: '利用可能スペース',
      description:
        '旗の台シェアハウス2階のイベントスペースと庭を利用できます。最大20名程度まで収容可能です。',
      list: [
        {
          name: '2階イベントスペース',
          description:
            'キッチン付きの多目的スペース。調理や飲食を伴うイベントが可能です。',
          images: ['img/rooms/S_2fEvSp/1.png', 'img/rooms/S_2fEvSp/2.png'],
        },
        {
          name: '庭',
          description: '開放的な空間でアウトドアイベントが可能です。',
          images: ['img/garden.png'],
        },
      ],
    },
    examples: {
      title: 'イベント事例',
      description: '以下のようなイベントでご利用いただけます：',
      list: [
        {
          title: 'ネットワーキングイベント',
          description:
            'ビジネスマッチングや交流を目的としたイベントに最適です。キッチンを使用した飲食イベントも可能です。',
          image: 'img/communities/networking.png',
        },
        {
          title: 'オープンハウス',
          description:
            'シェアハウスの見学会と組み合わせたイベントも可能です。居住者が主催する場合は、1Fの共有居住エリアも利用できるため、実際の生活空間でイベントを開催できます。',
          image: 'img/communities/open_house.png',
        },
        {
          title: '料理教室・食事会',
          description:
            'キッチン設備を活用した料理教室や食事会を開催できます。調理スペースと食事スペースが一体となった空間で、和やかな雰囲気のイベントが可能です。',
          image: 'img/communities/cooking_dining.png',
        },
        {
          title: '勉強会・読書会',
          description:
            '少人数での勉強会や読書会に適しています。静かな環境で集中して学習や討論ができます。プログラミング、語学、読書感想会など様々な用途に。',
          image: 'img/communities/study_room.png',
        },
        {
          title: 'その他のイベント例',
          description:
            'プロジェクターやホワイトボードを活用したプレゼンテーション、セミナー、ワークショップなども開催可能です。手作り講座や創作活動、ボードゲーム会など、参加者同士の交流を深められる様々なイベントにご利用いただけます。',
        },
      ],
    },
    conditions: {
      title: '利用条件',
      description:
        '2025年10月までの期間限定で、以下の条件を満たすイベントでご利用いただけます：',
      list: [
        {
          title: 'シェアハウス紹介',
          description:
            'イベント内でシェアハウス事業の紹介時間（15分程度）を設けていただきます',
        },
        {
          title: '利用時間',
          description: '11:00から22:00までご利用いただけます',
        },
        {
          title: '飲食',
          description:
            'キッチンを使用した調理や飲食が可能です。後片付けをお願いします',
        },
        {
          title: '原状復帰',
          description: '会場の原状復帰をお願いします',
        },
      ],
    },
    company: {
      title: '運営企業',
      name: 'AY合同会社',
      nameEn: 'AY.LLC.',
      representative: '担当：綾部 英俊',
      description: '旗の台シェアハウスを運営する企業です。',
    },
    contact: {
      title: 'お申し込み・お問い合わせ',
      description:
        'イベントスペースの利用をご検討の方は、Discordの「イベント企画」チャンネルにてお問い合わせください。QRコードまたはリンクからご参加いただけます。',
    },
  },
  en: {
    title: 'Free Event Space Campaign',
    description:
      'Until October 2025, Hatanodai Share House (5-min walk from Hatanodai Station on Tokyu Ikegami/Oimachi Line) offers our event space free of charge to promote community engagement. Anyone can use the space for events that include an introduction to our share house business.',
    spaces: {
      title: 'Available Spaces',
      description:
        'You can use the 2nd floor event space and garden at Hatanodai Share House. Maximum capacity is around 20 people.',
      list: [
        {
          name: '2F Event Space',
          description:
            'Multipurpose space with kitchen. Available for cooking and dining events.',
          images: ['img/rooms/S_2fEvSp/1.png', 'img/rooms/S_2fEvSp/2.png'],
        },
        {
          name: 'Garden',
          description: 'Open space available for outdoor events.',
          images: ['img/garden.png'],
        },
      ],
    },
    examples: {
      title: 'Event Examples',
      description: 'The space can be used for events such as below:',
      list: [
        {
          title: 'Networking Events',
          description:
            'Perfect for business matching and social networking events. Can be combined with food and drinks using the kitchen.',
          image: 'img/communities/networking.png',
        },
        {
          title: 'Open House',
          description:
            'You can combine your event with a share house tour. When hosted by residents, the 1F common living area is also available, allowing events to be held in the actual living space.',
          image: 'img/communities/open_house.png',
        },
        {
          title: 'Cooking Class & Dining',
          description:
            'Host cooking classes or dining events using our kitchen facilities. The integrated cooking and dining space creates a warm and friendly atmosphere.',
          image: 'img/communities/cooking_dining.png',
        },
        {
          title: 'Study Groups & Book Clubs',
          description:
            'Ideal for small study groups or book clubs. A quiet environment perfect for focused learning and discussion. Suitable for programming, language study, book reviews, and more.',
          image: 'img/communities/study_room.png',
        },
        {
          title: 'Other Event Examples',
          description:
            'The space is also suitable for presentations and seminars using projector and whiteboard, various workshops, handicraft classes, board game sessions, and more. Perfect for events that encourage interaction among participants.',
        },
      ],
    },
    conditions: {
      title: 'Terms of Use',
      description:
        'Until October 2025, events must meet the following conditions:',
      list: [
        {
          title: 'Share House Introduction',
          description:
            'Include a 15-minute introduction of our share house business during the event',
        },
        {
          title: 'Hours',
          description: 'Available from 11:00 to 22:00',
        },
        {
          title: 'Food & Drinks',
          description:
            'Cooking and dining are available using the kitchen. Please clean up after use',
        },
        {
          title: 'Clean Up',
          description: 'Restore the venue to its original condition after use',
        },
      ],
    },
    company: {
      title: 'Operating Company',
      name: 'AY.LLC.',
      nameEn: 'AY合同会社',
      representative: 'Contact: Hidetoshi Ayabe',
      description: 'We operate Hatanodai Share House.',
    },
    contact: {
      title: 'Application & Inquiries',
      description:
        'If you are interested in using our event space, please contact us through the "Event Planning" channel on Discord. You can join using the QR code or link below.',
    },
  },
}
