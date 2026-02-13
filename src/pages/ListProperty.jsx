import { useCallback } from 'react'
import ListPropertyHeader from '../components/listing/ListPropertyHeader'
import ListPropertyLayout from '../components/listing/ListPropertyLayout'
import PropertyOverviewForm from '../components/listing/PropertyOverviewForm'
import { usePropertyForm } from '../hooks/usePropertyForm'

export default function ListProperty() {
  const { form, updateField, errors, validateStep1, spotlightScore, aiContext } = usePropertyForm()

  const handleContinue = useCallback(() => {
    const validationErrors = validateStep1()
    if (Object.keys(validationErrors).length > 0) {
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0]
      const el = document.getElementById(firstErrorField) || document.querySelector(`[name="${firstErrorField}"]`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // In a full implementation, navigate to step 2
    alert('Step 1 complete! Proceeding to Space Details...')
  }, [validateStep1])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ListPropertyHeader />
      <ListPropertyLayout spotlightScore={spotlightScore}>
        <PropertyOverviewForm
          form={form}
          updateField={updateField}
          errors={errors}
          aiContext={aiContext}
          onContinue={handleContinue}
        />
      </ListPropertyLayout>
    </div>
  )
}
