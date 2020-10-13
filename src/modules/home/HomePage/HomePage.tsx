import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Hidden from '@material-ui/core/Hidden'
import { useSelector } from 'react-redux'

import { BoxProps, Col, Container, Row } from '../../../components'

import { HomePageRoot, Body } from './HomePage.style'
import { RestaurantCard, restaurantsSelector } from '../../restaurant'
import { commonSuggestions, SearchBox } from '../../search'

export type HomePageProps = BoxProps

const HomePage = (props: HomePageProps) => {
  const router = useRouter()
  const { restaurants } = useSelector(restaurantsSelector)

  const handleSearch = (value: string) => {
    router.push({ pathname: '/results', query: { search_query: value } })
  }

  useEffect(() => {
    router.prefetch('/results')
  }, [])

  return (
    <HomePageRoot {...props}>
      <Body fullWidth>
        <Hidden smDown>
          <SearchBox
            className="SearchBox"
            suggestions={commonSuggestions}
            onSearch={handleSearch}
          />
        </Hidden>
        <Container>
          <Row>
            {restaurants.map((resto) => (
              <Col key={resto.id} md={6} lg={3}>
                <Link href={`/restaurants/${resto.id}`}>
                  <RestaurantCard
                    title={resto.name}
                    image={resto.image}
                    category={resto.category}
                    open={resto.status.isOpen}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Body>
    </HomePageRoot>
  )
}

export { HomePage }
export default HomePage
