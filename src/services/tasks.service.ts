import { axiosWidthAuth } from '@/api/interseptors'
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

class TasksService {
	private BASE_URL = '/tasks'

	async getAll() {
		const response = axiosWidthAuth.get<ITaskResponse[]>(this.BASE_URL)
		return response
	}

	async create(data: TypeTaskFormState) {
		const response = axiosWidthAuth.post(this.BASE_URL, data)
		return response
	}

	async update(id: string, data: TypeTaskFormState) {
		const response = axiosWidthAuth.put(`${this.BASE_URL}/${id}`, {
			data
		})
		return response
	}

	async remove(id: string) {
		const response = axiosWidthAuth.get<ITaskResponse>(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const tasksService = new TasksService()
