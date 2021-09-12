import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import './style.less'

const Home: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    useEffect(() => {
        console.log('home')
    }, [])

    const handleOpenModal = () => {
        setModalVisible(true)
    }

    const handleConfirm = () => {
        handleCloseModal()
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return (
        <div className='page-home'>
            <div className='page-home__header'>home</div>
            <Button type='primary' onClick={handleOpenModal}>
                打开模态窗
            </Button>

            <Modal
                title='Basic Modal'
                visible={modalVisible}
                onOk={handleConfirm}
                onCancel={handleCloseModal}
                getContainer={false}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default Home
