require 'rails_helper'

RSpec.describe Todo do
  context 'validations' do
    it { is_expected.to validate_presence_of :description }
  end
end
