export const RoomNames = {
  R_1fL: 'Western Room (Detached)',
  R_1fC: 'Western Room (C)',
  R_1fJ: 'Japanese Room with Study',
  R_2fA: 'Western Room (A)',
  R_2fB: 'Western Room (B)',
  M_2fDomi: 'Shared Office',
  M_1fDomi: 'Male Dormitory',
  F_2fDomi: 'Female Dormitory',
} as const

export const DetailTexts = {
  R_1fL:
    'A detached room facing the garden with an additional service room featuring ample storage. Up to 3 people can share this room.',
  R_1fC:
    'A spacious private room on the 1st floor with a built-in single+ size bed. Up to 2 people can share this room.',
  R_1fJ:
    'The only Japanese-style room in the house, featuring a study room suitable for work. Up to 3 people can share this room.',
  R_2fA:
    'A private room on the 2nd floor (≒6.7 tatami/10.4㎡) with a large balcony overlooking the elementary school grounds. Up to 2 people can share this room.',
  R_2fB:
    'A private room on the 2nd floor (≒6.7 tatami/10.4㎡) with a large balcony overlooking the elementary school grounds. Up to 2 people can share this room.',
  M_2fDomi:
    'A shared office space equipped with exercise equipment including pull-up bars. External users can access it as a coworking space with a monthly contract.',
  M_1fDomi:
    'Male dormitory with one bunk bed and storage cabinet per person. Up to 6 people share one room. Note: Single occupancy requires an additional ¥30,000 per month.',
  F_2fDomi:
    'Female dormitory with a separate entrance in the same building, shared by up to 4 people. Features exclusive facilities for female dormitory residents including washing machine, bathroom, toilet, balcony, and kitchen. Access to other shared facilities is also available. Note: Single occupancy requires an additional ¥20,000 per month.',
} as const

export const SpecialSalesName = 'Student or Engineer Discount'

export const AvailableSoonText = (year: number, month: number): string =>
  `Available from ${year}/${month}`
