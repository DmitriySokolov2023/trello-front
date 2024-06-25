'use client'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import styles from './Auth.module.scss'

export function Auth() {
	const { register, handleSubmit, reset, formState } = useForm<IAuthForm>({
		mode: 'onSubmit'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			router.push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		console.log(data)
		mutate(data)
	}
	const errorMessage = {
		email: formState.errors['email']?.message,
		password: formState.errors['password']?.message
	}

	return (
		<div className="flex min-h-screen">
			<form
				className="w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.form__body}>
					<h2>Авторизация</h2>
					<input
						type="email"
						placeholder="e-mail"
						{...register('email', {
							required: 'Введите e-mail!',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address'
							}
						})}
					/>
					{errorMessage.email && <p className="text-xs  ">Ошибка в емале</p>}
					<input
						type="text"
						placeholder="password"
						{...register('password', {
							required: 'Введите пароль!',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address'
							}
						})}
					/>
					{errorMessage.password && (
						<p className="text-xs red">Ошибка в парале</p>
					)}
					<button className={styles.form__btn}>Войти</button>
				</div>
			</form>
		</div>
	)
}
