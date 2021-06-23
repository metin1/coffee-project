import { connect } from 'react-redux'
import cogoToast from 'cogo-toast'

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map((alert) => {
    let alertType = 'info'
    let alertHeading = t('information')
    switch (alert.alertType) {
      case 'success':
        alertType = 'success'
        alertHeading = 'Operation Successful'
        break
      case 'warning':
        alertType = 'warn'
        alertHeading = 'Warning'
        break
      case 'danger':
        alertType = 'error'
        alertHeading = 'Error'
        break
      default:
        break
    }
    const { hide } = cogoToast[alertType](alert.msg, {
      heading: alertHeading,
      position: 'top-center',
      hideAfter: 5,
      onClick: () => {
        hide()
      },
    })
    return null
  })

const mapStateToProps = (state) => ({ alerts: state.alert })

export default connect(mapStateToProps)(Alert)
