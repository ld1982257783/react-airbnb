// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    // 定义内部右侧按钮的状态
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)

    const scrollContentRef = useRef()
    const totalDistanceRef = useRef()

    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth    // 实际的宽度
        const clientWidht = scrollContentRef.current.clientWidth    // 本身占据的宽度
        const totalDistance = scrollWidth - clientWidht
        // console.log(totalDistance > 0, scrollWidth, clientWidht)
        setShowRight(totalDistance > 0)
        totalDistanceRef.current = totalDistance
    }, [])



    // 左右按钮点击
    function controlClickHandle(isRight) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl = scrollContentRef.current.children[newIndex]
        // console.log(newEl, newEl.offsetLeft)
        const newElOffsetLeft = newEl.offsetLeft   // offsetLeft 是要相对于父元素 如果父元素不设置相对定位 默认相对于body
        scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`

        // 滚动后需要进行如下判断
        // 1 设置新索引
        setPosIndex(newIndex)
        // 2 是否显示右边的按钮
        setShowRight(totalDistanceRef.current > newElOffsetLeft)
        // 3 是否展示左边的按钮
        setShowLeft(newElOffsetLeft > 0)
        // console.log(totalDistanceRef, newElOffsetLeft)
    }

    return (
        <ViewWrapper>
            {showLeft && (
                <div className='control left' onClick={e => controlClickHandle(false)}>
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div className='control right' onClick={e => controlClickHandle(true)}>
                    <IconArrowRight />
                </div>
            )}

            <div className='scroll'>
                <div className='scroll-content' ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

// ScrollView.propTypes = {}

export default ScrollView