export default{
  methods:{
    is_empty ( _var ) {
      if ( _var == null ) {
        // typeof null -> object : for hack a bug of ECMAScript
        return true;
      }
      switch( typeof _var ) {
        case 'object':
          if ( Array.isArray( _var ) ) {
            // When object is array:
            return ( _var.length === 0 );
          } else {
            // When object is not array:
            if ( Object.keys( _var ).length > 0 || Object.getOwnPropertySymbols(_var).length > 0 ) {
              return false;
            } else if ( _var.valueOf().length !== undefined ) {
              return ( _var.valueOf().length === 0 );
            } else if ( typeof _var.valueOf() !== 'object' ) {
              return this.is_empty( _var.valueOf() );
            } else {
              return true;
            }
          }
      case 'string':
        return ( _var === '' );
      case 'number':
        return ( _var == 0 );
      case 'boolean':
        return ! _var;
      case 'undefined':
        return true;
      case 'null':
        return true;
      case 'symbol':
        // Since ECMAScript6
        break;
      case 'function':
      default:
          return false;
      }
    }, // End of is_empty()
    isset ( _var ) {
      if(_var === "" || _var === null || _var === undefined){
          return false;
      }else{
          return true;
      }
    }, // End of isset()
    in_array ( _var, _arr) {
      const index = _arr.indexOf(_var);
      return (index !== -1) ? true : false;
    }
  }
}