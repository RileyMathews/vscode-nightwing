require "securerandom"

module ThisIsAModule
  class ThisIsAClass < Object
    THINGS = {
      string: "String",
      int: 123,
      bool: true,
      nil: nil
    }
    attr_reader :instance_variable

    def initailize(variable)
      @instance_variable = variable
    end

    def echo
      puts @instance_variable
    end
  end
end