import { axiosWidthAuth } from '@/api/interseptors'
import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState
} from '@/types/pomodoro.types'

class PomodoroService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const response = await axiosWidthAuth.get<IPomodoroSessionResponse>(
			`${this.BASE_URL}/today`
		)
		return response
	}

	async create() {
		const response = await axiosWidthAuth.post<IPomodoroSessionResponse>(
			this.BASE_URL
		)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosWidthAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWidthAuth.put(
			`${this.BASE_URL}/round/${id}`,
			data
		)
		return response
	}
}
