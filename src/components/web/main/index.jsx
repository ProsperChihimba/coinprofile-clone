import React from 'react'
import Features from './parts/features'
import Feedback from './parts/feedback'
import Profits from './parts/profits'
import Security from './parts/security'
import Welcome from './parts/welcome'

export const MainBody = () => {

    return (
        <>
            <Welcome />
            <Profits />
            <Features />
            <Feedback />
            <Security />
        </>
    )
}
