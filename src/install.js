import breadcrumbInstaller from './components/breadcrumb';
import buttonInstaller from './components/button';
import calloutInstaller from './components/callout';
import checkboxInstaller from './components/checkbox';
import choiceFieldGroupInstaller from './components/choice_field_group';
import commandBarInstaller from './components/command_bar';
import commandButtonInstaller from './components/command_button';
import contextualMenuInstaller from './components/contextual_menu';
import datePickerInstaller from './components/date_picker';
import dialogInstaller from './components/dialog';
import dropdownInstaller from './components/dropdown';
import iconInstaller from './components/icon';
import labelInstaller from './components/label';
import linkInstaller from './components/link';
import messageBannerInstaller from './components/message_banner';
import messageBarInstaller from './components/message_bar';
import orgChartInstaller from './components/org_chart';
import overlayInstaller from './components/overlay';
import panelInstaller from './components/panel';
import personaInstaller from './components/persona';
import pivotInstaller from './components/pivot';
import progressIndicatorInstaller from './components/progress_indicator';
import searchBoxInstaller from './components/search_box';
import spinnerInstaller from './components/spinner';
import tableInstaller from './components/table';
import textFieldInstaller from './components/text_field';
import toggleInstaller from './components/toggle';

export default function (Vue) {
  breadcrumbInstaller(Vue);
  buttonInstaller(Vue);
  calloutInstaller(Vue);
  checkboxInstaller(Vue);
  choiceFieldGroupInstaller(Vue);
  commandBarInstaller(Vue);
  commandButtonInstaller(Vue);
  contextualMenuInstaller(Vue);
  datePickerInstaller(Vue);
  dialogInstaller(Vue);
  dropdownInstaller(Vue);
  iconInstaller(Vue);
  labelInstaller(Vue);
  linkInstaller(Vue);
  messageBannerInstaller(Vue);
  messageBarInstaller(Vue);
  orgChartInstaller(Vue);
  overlayInstaller(Vue);
  panelInstaller(Vue);
  personaInstaller(Vue);
  pivotInstaller(Vue);
  progressIndicatorInstaller(Vue);
  searchBoxInstaller(Vue);
  spinnerInstaller(Vue);
  tableInstaller(Vue);
  textFieldInstaller(Vue);
  toggleInstaller(Vue);
}
