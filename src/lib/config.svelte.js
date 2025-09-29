class Config {
	theme = $state('dark')

	toggleTheme = () => {
		this.theme = this.theme === 'light' ? 'dark' : 'light'
	}
}

export const config = new Config()
