import React, { useState } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ImageDropBox.css';
import { toast, ToastContainer } from 'react-toastify';


const ImageDropBox = () => {

	const [file, setFile] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleImageChange = (e) => {
		if (e.target.files[0].type.split('/')[0] != 'image') {
			toast.error('You can upload only images', {
				position: toast.POSITION.BOTTOM_CENTER,
				bodyClassName: 'error-toast-body-class',
				className: 'error-toast-outer-class'
			});
			return;
		}
		if (file.length >= 3) {
			toast.error('You can upload maximum of 3 images', {
				position: toast.POSITION.BOTTOM_CENTER,
				className: 'error-toast-outer-class',
				bodyClassName: 'error-toast-body-class'
			});
			return;
		}
		setFile([...file, URL.createObjectURL(e.target.files[0])]);
	};
	const handleAddImageClick = () => {
		document.getElementById('file').click();
	};
	const handleDeleteImageClick = () => {
		let temp = [...file];
		temp.splice(currentIndex, 1);
		setCurrentIndex(currentIndex - 1);
		setFile(temp);
	};

	return (
		<div className='image-drop-box'>
			<input type='file' id='file' onChange={handleImageChange} />
			<div className='image-drop-box-container'>
				{file.length == 0 ?
					<div className='image-input-area-empty'>
						<img src='/assets/Icons/download-data.svg' onClick={handleAddImageClick} />
						<h1 onClick={handleAddImageClick}>Upload Images</h1>
					</div>
					:
					<div className='image-slider'>
						<Swiper
							navigation={true}
							pagination={true}
							modules={[Navigation, Pagination]}
							className="mySwiper"
							onNavigationNext={() => setCurrentIndex(currentIndex + 1)}
							onNavigationPrev={() => setCurrentIndex(currentIndex - 1)}
							onChange={(swiper) => setCurrentIndex(swiper.realIndex)}
						>
							{file.map((item) => {
								return (
									<SwiperSlide key={item}>
										<img src={item} />
									</SwiperSlide>
								);

							})}

						</Swiper>
					</div>
				}
				<div className='image-control-area'>
					<div className='control-area-btns'>
						<div className='img-black-bg' onClick={handleAddImageClick} >
							<img src='/assets/Icons/image-add.svg' />
						</div>
						{
							file.length != 0 &&
							<div className='img-black-bg' onClick={handleDeleteImageClick} >
								<img src='/assets/Icons/image-delete.svg' />
							</div>
						}
					</div>
				</div>
			</div>
			<ToastContainer
				hideProgressBar={true}
			/>
		</div>
	);
};

export default ImageDropBox;