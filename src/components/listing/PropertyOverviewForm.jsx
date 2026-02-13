import { Building2, Home, TreePine } from 'lucide-react'
import FormField from './FormField'
import ChipSelector from './ChipSelector'
import CategoryDropdown from './CategoryDropdown'
import AITextInput from './AITextInput'
import AITextarea from './AITextarea'
import { LISTER_TYPES, PROPERTY_TYPES, AVAILABILITY_OPTIONS, getCategoriesForType, getSpecsForCategory } from '../../services/propertyConstants'

const ICON_MAP = {
  Building2,
  Home,
  TreePine,
}

export default function PropertyOverviewForm({ form, updateField, errors, aiContext, onContinue }) {
  const categories = getCategoriesForType(form.propertyType)
  const specs = getSpecsForCategory(form.category)

  const propertyTypeOptions = PROPERTY_TYPES.map((pt) => ({
    value: pt.value,
    label: pt.label,
    icon: pt.icon,
  }))

  return (
    <div className="bg-white rounded-xl shadow-md border border-neutral-200 p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-800">Property Overview</h2>
        <p className="text-sm text-neutral-500 mt-1">Please provide the following information</p>
      </div>

      <div className="space-y-6">
        {/* 1. I am a */}
        <FormField label="I am a" required error={errors.listerType}>
          <ChipSelector
            options={LISTER_TYPES}
            value={form.listerType}
            onChange={(val) => updateField('listerType', val)}
            label="Lister type"
          />
        </FormField>

        {/* 2. Property Type */}
        <FormField label="Property Type" required error={errors.propertyType}>
          <div className="flex flex-wrap gap-3">
            {propertyTypeOptions.map((pt) => {
              const Icon = ICON_MAP[pt.icon]
              const selected = form.propertyType === pt.value
              return (
                <button
                  key={pt.value}
                  type="button"
                  onClick={() => updateField('propertyType', pt.value)}
                  className={`
                    flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium
                    transition-all duration-150 cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:ring-offset-1
                    ${selected
                      ? 'bg-[#2558A6] text-white border border-transparent shadow-sm'
                      : 'border border-neutral-200 text-neutral-600 bg-white hover:border-[#2558A6] hover:text-[#2558A6]'
                    }
                  `}
                >
                  {Icon && <Icon size={18} />}
                  {pt.label}
                </button>
              )
            })}
          </div>
        </FormField>

        {/* 3. Category */}
        {form.propertyType && (
          <FormField label="Category" required htmlFor="category" error={errors.category}>
            <CategoryDropdown
              id="category"
              options={categories}
              value={form.category}
              onChange={(val) => updateField('category', val)}
              placeholder="Select category..."
            />
          </FormField>
        )}

        {/* 4. Specifications */}
        {specs.length > 0 && (
          <FormField label="Specifications" error={errors.specifications}>
            <ChipSelector
              options={specs}
              value={form.specifications}
              onChange={(val) => updateField('specifications', val)}
              label="Specifications"
            />
          </FormField>
        )}

        {/* 5. Available For */}
        <FormField label="Available For" required error={errors.availableFor}>
          <ChipSelector
            options={AVAILABILITY_OPTIONS}
            value={form.availableFor}
            onChange={(val) => updateField('availableFor', val)}
            label="Available for"
          />
        </FormField>

        {/* 6. Catchy Title */}
        <FormField label="Catchy Title" required htmlFor="title" error={errors.title}>
          <AITextInput
            id="title"
            value={form.title}
            onChange={(val) => updateField('title', val)}
            aiContext={aiContext}
            placeholder="e.g., Spacious 3BHK with City Views..."
          />
        </FormField>

        {/* 7. Property Highlights */}
        <FormField label="Property Highlights" required htmlFor="description" error={errors.description}>
          <AITextarea
            id="description"
            value={form.description}
            onChange={(val) => updateField('description', val)}
            aiContext={aiContext}
            placeholder="Describe key features, amenities, and what makes this property special..."
          />
        </FormField>

        {/* Continue button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onContinue}
            className="btn w-full sm:w-auto bg-[#2558A6] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#1e4a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:ring-offset-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
