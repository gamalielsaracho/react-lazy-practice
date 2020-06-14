import React, { Fragment, lazy, Suspense } from 'react'

import Loading from './Loading'

const Maps = lazy(() => import('./Maps'))

function DashboardMaps () {
  return <Fragment>
    <h3>Dashboard Maps</h3>
    <br/>
    
    <Suspense fallback={<Loading/>}>
      <Maps/>
    </Suspense>
  </Fragment>
}
export default DashboardMaps