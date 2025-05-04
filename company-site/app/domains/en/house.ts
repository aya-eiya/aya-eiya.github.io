export const RoomNames = {
  R_1fL: 'Room (D)',
  R_1fC: 'Room (C)',
  R_1fJ: 'Japanese Room',
  R_2fA: 'Room (A)',
  R_2fB: 'Room (B)',
  M_1fDomi: 'Male Dormitory',
  F_2fDomi: 'Female Dormitory',
  S_2fOfc: 'Shared Office',
  S_1fBath: '1F Bathroom',
  S_1fDk: 'Shared Kitchen',
  S_1fEnt: 'Main Entrance',
  S_1fLiv: 'Living Room',
  S_1fStr: 'Stairs',
  S_1fToi: '1F Toilet',
  S_2fBath: '2F Bathroom',
  S_2fCor: 'Corridor',
  S_2fEvSp: 'Event Space',
  S_2fStr: 'Stairs',
  S_2fToi: '2F Toilet',
  S_2f1KStr: 'Female Dorm Entrance',
} as const

export const DetailTexts = {
  R_1fL:
    'A detached room facing the garden with an additional room (can be used as den or study room) featuring ample storage. Up to 3 people can share this room.',
  R_1fC:
    'A spacious private room on the 1st floor with a built-in single+ size bed. Up to 2 people can share this room.',
  R_1fJ:
    'The only Japanese-style room in the house, featuring a study room suitable for work. Up to 3 people can share this room.',
  R_2fA:
    'A private room on the 2nd floor (≒6.7 tatami/10.4㎡) with a large balcony overlooking the elementary school grounds. Up to 2 people can share this room.',
  R_2fB:
    'A private room on the 2nd floor (≒6.7 tatami/10.4㎡) with a large balcony overlooking the elementary school grounds. Up to 2 people can share this room.',
  M_1fDomi:
    'Male dormitory with one bunk bed and storage cabinet per person. Up to 6 people share one room. Note: Single occupancy requires an additional ¥30,000 per month.',
  F_2fDomi:
    'Female dormitory with a separate entrance in the same building, shared by up to 4 people. Features exclusive facilities for female dormitory residents including washing machine, bathroom, toilet, balcony, and kitchen. Access to other shared facilities is also available. Note: Single occupancy requires an additional ¥20,000 per month.',
  S_2fOfc:
    'A shared office space equipped with exercise equipment including pull-up bars. External users can access it as a coworking space with a monthly contract.',
  S_1fBath: 'First floor bathroom, primarily for male residents',
  S_1fDk: 'Shared dining kitchen',
  S_1fEnt: 'Main entrance with electronic lock security system',
  S_1fLiv:
    'Living room featuring a large monitor, sofa, shared mini PC, and gaming equipment for movie watching and gaming',
  S_1fStr:
    'Stairway to 2F with a skylight that creates a bright atmosphere throughout the hallway',
  S_1fToi: 'First floor toilet',
  S_2fBath: 'Second floor bathroom, exclusively for female residents',
  S_2fCor: 'Second floor corridor',
  S_2fEvSp:
    'Event space available for share house events. Can also be rented for private gatherings by external users (rental fee applies)',
  S_2fStr:
    'Stairway to 1F with a skylight that creates a bright atmosphere throughout the hallway',
  S_2fToi: 'Second floor toilet, exclusively for female residents',
  S_2f1KStr: 'Female dormitory entrance with electronic lock security system',
} as const

export const SpecialSalesName = 'Student or Engineer Discount'

export const AvailableSoonText = (year: number, month: number): string =>
  `Available ${year}/${month}`
