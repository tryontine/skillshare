export async function resolve(specifier, context, nextResolve) {
  let modifiedSpecifier = specifier;
  if (modifiedSpecifier.startsWith('@/')) {
    modifiedSpecifier = new URL(modifiedSpecifier.replace(/^@\//, './'), 'file://' + process.cwd() + '/').href;
  }

  if (!modifiedSpecifier.endsWith('.ts') && !modifiedSpecifier.endsWith('.js') && (modifiedSpecifier.startsWith('.') || modifiedSpecifier.startsWith('file://'))) {
      try {
          return await nextResolve(modifiedSpecifier + '.ts', context);
      } catch (e) {
          try {
              return await nextResolve(modifiedSpecifier + '.js', context);
          } catch (e2) {}
      }
  }

  return nextResolve(modifiedSpecifier, context);
}
