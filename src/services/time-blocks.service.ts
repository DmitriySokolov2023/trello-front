import { axiosWidthAuth } from '@/api/interseptors'
import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlock() {
		const response = await axiosWidthAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}
	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await axiosWidthAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}
	async updateOrderTimeBlock() {
		const response = await axiosWidthAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}

	async updateTimeBlock() {
		const response = await axiosWidthAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}

	async deleteTimeBlock() {
		const response = await axiosWidthAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}
}

export const timeBlockService = new TimeBlockService()
