type tabsType = Record<string, string | boolean | number>

export interface TabInterface {
  tabs: () => tabsType[]
  activeTab: () => tabsType
  isActiveTab: (i: number) => boolean
  setActiveTab: (i: number) => void
}

export default (tabs: tabsType[]): TabInterface => {
  let activeTab = 0

  return {
    tabs: () => tabs,
    activeTab: () => tabs[activeTab],
    isActiveTab: i => i === activeTab,
    setActiveTab: i => {
      activeTab = i
    }
  }
}
