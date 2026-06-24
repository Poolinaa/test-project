export interface Plan {
  id: string
  title: string
  price: string
  oldPrice?: string
}

export const benefits: string[] = [
  'Преимущество 1',
  'Преимущество 2',
  'Преимущество 3',
]

export const heading = {
  title: 'Заголовок',
  subtitle: 'Характеризующий предложение текст',
} as const

export const plans: Plan[] = [
  {
    id: 'annual',
    title: 'Годовая подписка',
    price: '$29.99',
  },
  {
    id: 'monthly',
    title: 'Месячная подписка',
    price: '$4.99',
    oldPrice: '$4.99',
  },
]

export const defaultPlanId = 'annual'

export const footerLinks: string[] = [
  'Политика и правила',
  'Восстановить покупки',
]