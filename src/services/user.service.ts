import { axiosWidthAuth } from '@/api/interseptors'
import { IUser, TypeUserForm } from '@/types/auth.types'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile(id: string) {
		const response = axiosWidthAuth.get<IProfileResponse>(this.BASE_URL)

		return response
	}

	async update(data: TypeUserForm) {
		const response = axiosWidthAuth.put(this.BASE_URL, data)
	}
}

export const userService = new UserService()
